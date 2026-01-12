import { createTheme, type MantineColorsTuple } from '@mantine/core';

const usedColors: MantineColorsTuple = [
  '#ffffff', //0
  '#f6f8fA', //1
  '#cdcdcd', //2
  '#b2b2b2', //3
  '#9a9a9a', //4
  '#8b8b8b', //5
  '#06121e', //6
  '#848484', //7
  '#717171', //8
  '#000000', //9
  '#fff8e1', //bright orange //10
  '#ffefcb', //11
  '#ffdd9a', //12
  '#ffca64', //13
  '#ffba38', //14
  '#ffb01b', //15
  '#ffa903', //16
  '#e39500', //17
  '#cb8400', //18
  '#b07100', //19
  "#fff4e1", //deep orange //20
  "#ffe8cc", //21
  "#fed09b", //22
  "#fdb766", //23
  "#fca13a", //24
  "#fc931d", //25
  "#fc8a08", //26
  "#e17800", //27
  "#c86a00", //28
  "#af5a00" //29
]

export const theme = createTheme({
  colors: { black: usedColors },
  primaryColor: 'black',
  primaryShade: 6,
})