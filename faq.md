# Feature Compatibility with Electron

| Feature                    | Electron Version | Notes                                                                   |
| :------------------------- | :--------------- | :---------------------------------------------------------------------- |
| Steam Remote Play Together | Any              |                                                 |
| Steam Overlay              | Any              |  |
| Steam Input                | Electron 26 max  | Issues with Electron 27+ (Windows).                                     |
| OBS recording | Any | |
| Custom icons | Any | |
---

# Feature Matrix
## Building

| Engine   | Windows | Linux | MacOS | Android | iOS | SteamDeck |
|----------|:-------:|:-----:|:-----:|:-------:|:---:|:---------:|
| Electron | ✔️      | ✔️    | ✔️    | ❌      | ❌  | ✔️        |
| Tauri    | ✔️      | ✔️    | ✔️    | ✔️      | ✔️  | ✔️<sup>1</sup>        |
| Discord<sup>2</sup>  | ✔️      | ✔️    | ✔️    | ✔️      | ✔️  | ✔️        |

1. Through Linux Appimage
2. Through Discord app

## Cross compiling
### Electron
| Build ↓ on →   | Windows | Linux | MacOS | Android | iOS | SteamDeck<sup>1</sup> |
|----------|:-------:|:-----:|:-----:|:-------:|:---:|:---------:|
| Windows | ✔️      | ✔️    | ❔    | ❌      | ❌  |         |
| Linux    | ✔️      | ✔️    | ❔    | ❌      | ❌  | |
| MacOs  | ❌      | ❌    | ✔️    | ❌      | ❌  |         |

1. See Windows for proton or Linux

## Steam Overlay Support

| Engine   | Windows | Linux | MacOS | Android | iOS | SteamDeck |
|----------|:-------:|:-----:|:-----:|:-------:|:---:|:---------:|
| Electron | ✔️      | ?    | ?    | ❌      | ❌  | ?        |
| Tauri    | ❌      | ❌    | ❌    | ❌      | ❌  | ❌  |
| Discord  | ❌      | ❌    | ❌    | ❌      | ❌  | ❌       |

## Discord Rich Presence Support

| Engine   | Windows | Linux | MacOS | Android | iOS | SteamDeck |
|----------|:-------:|:-----:|:-----:|:-------:|:---:|:---------:|
| Electron | ✔️      | ✔️    | ✔️    | ❌      | ❌  | ✔️        |
| Tauri    | ✔️      | ✔️    | ✔️    | ❌      | ❌  | ✔️        |
| Discord  | ✔️      | ✔️    | ✔️    | ✔️      | ❌  | ✔️        |
