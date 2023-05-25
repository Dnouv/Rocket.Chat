# @rocket.chat/meteor

## 6.3.0

### Minor Changes

- [#28975](https://github.com/RocketChat/Rocket.Chat/pull/28975) [`9ea8088f06`](https://github.com/RocketChat/Rocket.Chat/commit/9ea8088f0621900fa7a11156a89f7447482e4df8) Thanks [@yash-rajpal](https://github.com/yash-rajpal)! - fix: respect useEmoji preference for messages

- [#29303](https://github.com/RocketChat/Rocket.Chat/pull/29303) [`35aeeed1ca`](https://github.com/RocketChat/Rocket.Chat/commit/35aeeed1cab7875bb622f4c1a33be743ab7e851e) Thanks [@yash-rajpal](https://github.com/yash-rajpal)! - fix: Hide roomLeader padding

- [#29255](https://github.com/RocketChat/Rocket.Chat/pull/29255) [`e116d88047`](https://github.com/RocketChat/Rocket.Chat/commit/e116d8804783c91d2f0d1633caea25aeefb67b86) Thanks [@dougfabris](https://github.com/dougfabris)! - chore: Add `roomName` on Composer placeholder

- [#29263](https://github.com/RocketChat/Rocket.Chat/pull/29263) [`40cebcc0f1`](https://github.com/RocketChat/Rocket.Chat/commit/40cebcc0f1ce12b0b0d6fdf497b5399930c713bf) Thanks [@ggazzo](https://github.com/ggazzo)! - ask for totp if the provided one is invalid

- [#29286](https://github.com/RocketChat/Rocket.Chat/pull/29286) [`7e00009ddb`](https://github.com/RocketChat/Rocket.Chat/commit/7e00009ddb2d23995eacf5b176b0ebc8007e4bb6) Thanks [@anikdhabal](https://github.com/anikdhabal)! - fix: Analytics page crash

### Patch Changes

- [#28814](https://github.com/RocketChat/Rocket.Chat/pull/28814) [`222c8ec5bb`](https://github.com/RocketChat/Rocket.Chat/commit/222c8ec5bb49aa3cd7327d707a957cde592401c6) Thanks [@matheusbsilva137](https://github.com/matheusbsilva137)! - feat: [ENTERPRISE] Add setting to control user merge on LDAP Background Sync

- [#29349](https://github.com/RocketChat/Rocket.Chat/pull/29349) [`c95cda43e6`](https://github.com/RocketChat/Rocket.Chat/commit/c95cda43e69b931cb2c902f9cd031ac064930f6a) Thanks [@ggazzo](https://github.com/ggazzo)! - fix: getActiveLocalUserCount query always returning 0

- [#29293](https://github.com/RocketChat/Rocket.Chat/pull/29293) [`1687bfbe3a`](https://github.com/RocketChat/Rocket.Chat/commit/1687bfbe3a6af77614e2c20a0ec9c59a218edc66) Thanks [@debdutdeb](https://github.com/debdutdeb)! - fix: Admins unable to create new users if new users require manual approval

- [#29278](https://github.com/RocketChat/Rocket.Chat/pull/29278) [`17024613c5`](https://github.com/RocketChat/Rocket.Chat/commit/17024613c5250fd9a311bd53b623e27bc1001be4) Thanks [@aleksandernsilva](https://github.com/aleksandernsilva)! - fixes the Livechat CSP validation, which was incorrectly blocking access to the widget for all non whitelisted domains

- [#27121](https://github.com/RocketChat/Rocket.Chat/pull/27121) [`c8cdc51799`](https://github.com/RocketChat/Rocket.Chat/commit/c8cdc5179932c23bc1211eb6df1ae602c2772cc7) Thanks [@debdutdeb](https://github.com/debdutdeb)! - fix: unable to upload files in IOS Safari browsers

- [#29128](https://github.com/RocketChat/Rocket.Chat/pull/29128) [`2bcc812fcf`](https://github.com/RocketChat/Rocket.Chat/commit/2bcc812fcfaa570fb814a1484d02a47c006f8562) Thanks [@ggazzo](https://github.com/ggazzo)! - fix: Rocket.Chat.Apps using wrong id parameter to emit settings

- [#28989](https://github.com/RocketChat/Rocket.Chat/pull/28989) [`505b292ba9`](https://github.com/RocketChat/Rocket.Chat/commit/505b292ba90a861ad9bd58b3751018d5016612c5) Thanks [@murtaza98](https://github.com/murtaza98)! - test: add missing omnichannel contact-center tests

- [#29019](https://github.com/RocketChat/Rocket.Chat/pull/29019) [`82194555ea`](https://github.com/RocketChat/Rocket.Chat/commit/82194555ea4569cb1f923f438c87e5cc5e92f072) Thanks [@totoi690](https://github.com/totoi690)! - fix: Editing a room in the admin menu breaks that room's integration

- [#29323](https://github.com/RocketChat/Rocket.Chat/pull/29323) [`f8cd53bc7e`](https://github.com/RocketChat/Rocket.Chat/commit/f8cd53bc7e89ab45c8963d65c99c96d87756d91a) Thanks [@KevLehman](https://github.com/KevLehman)! - fix: Add missing awaits to .count() calls

- Updated dependencies [[`4b5a87c88b`](https://github.com/RocketChat/Rocket.Chat/commit/4b5a87c88b132c6899ee5023059d17822766bec7), [`9ea8088f06`](https://github.com/RocketChat/Rocket.Chat/commit/9ea8088f0621900fa7a11156a89f7447482e4df8), [`40cebcc0f1`](https://github.com/RocketChat/Rocket.Chat/commit/40cebcc0f1ce12b0b0d6fdf497b5399930c713bf), [`40cebcc0f1`](https://github.com/RocketChat/Rocket.Chat/commit/40cebcc0f1ce12b0b0d6fdf497b5399930c713bf)]:
  - @rocket.chat/web-ui-registration@1.0.0
  - @rocket.chat/gazzodown@1.0.0
  - @rocket.chat/api-client@0.1.0
  - @rocket.chat/fuselage-ui-kit@1.0.0
  - @rocket.chat/core-typings@6.3.0
  - @rocket.chat/rest-typings@6.3.0
  - @rocket.chat/omnichannel-services@0.0.2
  - @rocket.chat/pdf-worker@0.0.2
  - @rocket.chat/presence@0.0.2
  - @rocket.chat/core-services@0.0.2
  - @rocket.chat/cron@0.0.2
  - @rocket.chat/model-typings@0.0.2
  - @rocket.chat/ui-contexts@1.0.0
  - @rocket.chat/models@0.0.2
  - @rocket.chat/ui-theming@0.0.1
  - @rocket.chat/ui-client@1.0.0
  - @rocket.chat/ui-video-conf@1.0.0
  - @rocket.chat/instance-status@0.0.2
