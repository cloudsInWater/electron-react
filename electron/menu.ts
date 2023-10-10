const isMac = process.platform === "darwin";

const template: any = ({ appName }: { appName: string }) => [
  // { role: 'appMenu' }
  ...(isMac
    ? [
        {
          label: appName,
          //   submenu: [
          //     { role: "about" },
          //     { type: "separator" },
          //     { role: "services" },
          //     { type: "separator" },
          //     { role: "hide" },
          //     { role: "hideOthers" },
          //     { role: "unhide" },
          //     { type: "separator" },
          //     { role: "quit" },
          //   ],
        },
      ]
    : []),
  //   {
  //     label: "文件",
  //     submenu: [isMac ? { role: "关闭" } : { role: "退出" }],
  //   },
  //   {
  //     label: "View",
  //     submenu: [
  //       { role: "reload" },
  //       { role: "forceReload" },
  //       { role: "toggleDevTools" },
  //       { type: "separator" },
  //       { role: "resetZoom" },
  //       { role: "zoomIn" },
  //       { role: "zoomOut" },
  //       { type: "separator" },
  //       { role: "togglefullscreen" },
  //     ],
  //   },
  //   {
  //     label: "Window",
  //     submenu: [
  //       { role: "minimize" },
  //       { role: "zoom" },
  //       ...(isMac
  //         ? [
  //             { type: "separator" },
  //             { role: "front" },
  //             { type: "separator" },
  //             { role: "window" },
  //           ]
  //         : [{ role: "close" }]),
  //     ],
  //   },
  //   {
  //     role: "help",
  //     submenu: [
  //       {
  //         label: "Learn More",
  //         click: async () => {
  //           // eslint-disable-next-line @typescript-eslint/no-var-requires
  //           const { shell } = require("electron");
  //           await shell.openExternal("https://electronjs.org");
  //         },
  //       },
  //     ],
  //   },
];

export default template;
