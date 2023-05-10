import { useEndpoint, useSetModal, useToastMessageDispatch, useTranslation } from '@rocket.chat/ui-contexts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';

import GenericModal from '../../../../components/GenericModal';

function isApiResponse(response: unknown): response is { success: boolean } {
	return typeof response === 'object' && response !== null && 'success' in response;
}

const useDeleteMessage = (mid: string, rid: string, onChange: () => void) => {
	const t = useTranslation();
	const getMessage = useEndpoint('GET', '/v1/chat.getMessage');
	const deleteMessage = useEndpoint('POST', '/v1/chat.delete');
	const dismissMessage = useEndpoint('POST', '/v1/moderation.dismissReports');
	const dispatchToastMessage = useToastMessageDispatch();
	const setModal = useSetModal();
	const queryClient = useQueryClient();

	const handleDeleteMessages = useMutation({
		mutationFn: async ({ msgId, roomId, asUser }: { msgId: string; roomId: string; asUser: boolean }) => {
			try {
				await getMessage({ msgId });
			} catch (error) {
				return error;
			}
			return deleteMessage({ msgId, roomId, asUser });
		},
		onError: (error) => {
			dispatchToastMessage({ type: 'error', message: error });
		},
		onSuccess: (response) => {
			if (isApiResponse(response) && !response.success) {
				dispatchToastMessage({ type: 'warning', message: t('Moderation_Message_already_deleted') });
				return;
			}
			dispatchToastMessage({ type: 'success', message: t('Deleted') });
		},
	});

	const handleDismissMessage = useMutation({
		mutationFn: dismissMessage,
		onError: (error) => {
			dispatchToastMessage({ type: 'error', message: error });
		},
		onSuccess: () => {
			dispatchToastMessage({ type: 'success', message: t('Moderation_Reports_dismissed') });
		},
	});

	const onDeleteAll = async () => {
		await handleDeleteMessages.mutateAsync({ msgId: mid, roomId: rid, asUser: true });
		await handleDismissMessage.mutateAsync({ msgId: mid });
		onChange();
		// onReload();

		queryClient.invalidateQueries({ queryKey: ['moderation.reports'] });
		setModal();
	};

	const confirmDeletMessage = (): void => {
		setModal(
			<GenericModal
				confirmText={t('Moderation_Dismiss_and_delete')}
				title={t('Moderation_Delete_this_message')}
				variant='danger'
				onConfirm={() => onDeleteAll()}
				onCancel={() => setModal()}
			>
				{t('Moderation_Are_you_sure_you_want_to_delete_this_message')}
			</GenericModal>,
		);
	};

	return confirmDeletMessage;
};

export default useDeleteMessage;
