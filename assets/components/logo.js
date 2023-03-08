import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="d2cd7e8161"><path d="M 112.902344 87.320312 L 262.097656 87.320312 L 262.097656 223.816406 L 112.902344 223.816406 Z M 112.902344 87.320312 " clip-rule="nonzero"/></clipPath><clipPath id="43212a2609"><path d="M 147.605469 145.339844 L 227.105469 145.339844 L 227.105469 224.839844 L 147.605469 224.839844 Z M 147.605469 145.339844 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#d2cd7e8161)"><path fill="#ff5757" d="M 259.410156 155.285156 L 194.109375 90.039062 C 190.492188 86.417969 184.519531 86.417969 180.917969 90.039062 L 115.601562 155.285156 C 112 158.890625 112 164.871094 115.601562 168.480469 C 119.21875 172.101562 125.179688 172.101562 128.796875 168.480469 L 136.808594 160.46875 L 136.808594 212.664062 C 136.808594 218.789062 141.828125 223.816406 147.949219 223.816406 L 226.90625 223.816406 C 233.039062 223.816406 238.058594 218.789062 238.058594 212.664062 L 238.058594 160.628906 L 246.070312 168.640625 C 247.953125 170.523438 250.308594 171.320312 252.667969 171.320312 C 255.011719 171.320312 257.527344 170.363281 259.25 168.640625 C 263.027344 165.019531 263.027344 159.050781 259.410156 155.285156 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#43212a2609)"><path fill="#ffffff" d="M 209.324219 145.339844 C 205.683594 145.339844 204.074219 146.457031 202.320312 147.761719 C 199.488281 147.476562 196.265625 148.613281 194.625 151.609375 C 193.347656 153.949219 191.015625 158.210938 190.726562 161.28125 C 190.6875 161.476562 190.667969 161.675781 190.667969 161.875 C 190.667969 161.886719 190.667969 161.894531 190.667969 161.902344 C 190.667969 162.34375 190.75 162.765625 190.917969 163.171875 C 191.085938 163.578125 191.324219 163.933594 191.636719 164.246094 C 191.949219 164.554688 192.304688 164.796875 192.710938 164.964844 C 193.117188 165.132812 193.539062 165.214844 193.980469 165.214844 C 189.265625 180.796875 160.855469 178.527344 160.855469 208.277344 L 160.855469 217.773438 C 159.042969 217.292969 157.679688 216.441406 156.660156 215.316406 C 155.101562 213.589844 154.230469 211.109375 154.230469 208.277344 C 154.234375 207.832031 154.152344 207.398438 153.984375 206.984375 C 153.816406 206.570312 153.574219 206.203125 153.257812 205.886719 C 152.941406 205.570312 152.574219 205.328125 152.160156 205.160156 C 151.742188 204.992188 151.3125 204.914062 150.863281 204.921875 C 150.425781 204.925781 150.003906 205.015625 149.601562 205.191406 C 149.199219 205.367188 148.84375 205.609375 148.539062 205.925781 C 148.234375 206.238281 148 206.601562 147.839844 207.007812 C 147.675781 207.414062 147.597656 207.839844 147.605469 208.277344 C 147.605469 212.476562 148.90625 216.621094 151.746094 219.761719 C 154.582031 222.902344 158.945312 224.839844 164.167969 224.839844 L 170.792969 224.839844 L 170.792969 221.527344 C 170.792969 208.277344 177.414062 204.964844 181.105469 203.074219 C 178.871094 201.554688 177.417969 199.273438 177.417969 196.683594 C 177.417969 195.4375 177.769531 194.265625 178.359375 193.203125 C 177.933594 191.824219 177.414062 188.300781 177.417969 185.089844 C 181.511719 185.089844 184.566406 188.773438 184.566406 188.773438 C 185.457031 188.554688 186.378906 188.402344 187.355469 188.402344 C 188.328125 188.402344 189.25 188.554688 190.140625 188.773438 C 190.140625 188.773438 192.460938 185.089844 197.292969 185.089844 C 197.292969 188.300781 196.773438 191.824219 196.347656 193.203125 C 196.941406 194.265625 197.292969 195.4375 197.292969 196.683594 C 197.292969 199.460938 195.636719 201.902344 193.117188 203.40625 C 193.601562 204.867188 193.980469 209.839844 193.980469 211.589844 C 193.980469 214.71875 193.167969 217.941406 192.710938 219.898438 C 193.492188 220.773438 193.980469 221.917969 193.980469 223.183594 L 193.980469 224.839844 L 213.855469 224.839844 C 215.6875 224.839844 217.167969 223.355469 217.167969 221.527344 C 217.167969 219.699219 215.6875 218.214844 213.855469 218.214844 L 212.527344 218.214844 L 207.558594 193.363281 C 209.394531 191.09375 210.542969 188.242188 210.542969 185.089844 C 210.542969 168.453125 211.441406 165.214844 216.28125 165.214844 L 218.824219 165.214844 C 219.722656 165.214844 220.558594 164.984375 221.332031 164.527344 C 222.105469 164.070312 222.714844 163.453125 223.152344 162.667969 L 223.164062 162.660156 L 223.246094 162.496094 C 223.25 162.492188 223.253906 162.484375 223.253906 162.480469 L 226.664062 155.859375 C 226.777344 155.695312 226.867188 155.523438 226.9375 155.335938 C 227.007812 155.152344 227.058594 154.960938 227.082031 154.765625 C 227.105469 154.566406 227.109375 154.371094 227.085938 154.171875 C 227.0625 153.976562 227.019531 153.785156 226.949219 153.597656 C 226.882812 153.414062 226.792969 153.238281 226.683594 153.074219 C 226.574219 152.90625 226.445312 152.757812 226.300781 152.625 C 226.152344 152.488281 225.992188 152.375 225.820312 152.277344 C 225.648438 152.183594 225.464844 152.109375 225.273438 152.054688 L 225.214844 152.035156 C 225.210938 152.035156 225.207031 152.035156 225.203125 152.035156 L 217.167969 149.597656 C 217.167969 149.597656 215.542969 145.339844 209.324219 145.339844 Z M 182.386719 195.027344 C 182.164062 195.027344 181.953125 195.070312 181.75 195.152344 C 181.546875 195.238281 181.371094 195.359375 181.214844 195.511719 C 181.058594 195.667969 180.9375 195.847656 180.855469 196.050781 C 180.769531 196.253906 180.730469 196.464844 180.730469 196.683594 C 180.730469 196.902344 180.769531 197.113281 180.855469 197.316406 C 180.9375 197.519531 181.058594 197.699219 181.214844 197.855469 C 181.371094 198.011719 181.546875 198.128906 181.75 198.214844 C 181.953125 198.296875 182.164062 198.339844 182.386719 198.339844 C 182.605469 198.339844 182.816406 198.296875 183.019531 198.214844 C 183.222656 198.128906 183.402344 198.011719 183.554688 197.855469 C 183.710938 197.699219 183.832031 197.519531 183.914062 197.316406 C 184 197.113281 184.042969 196.902344 184.042969 196.683594 C 184.042969 196.464844 184 196.253906 183.914062 196.050781 C 183.832031 195.847656 183.710938 195.667969 183.554688 195.511719 C 183.402344 195.359375 183.222656 195.238281 183.019531 195.152344 C 182.816406 195.070312 182.605469 195.027344 182.386719 195.027344 Z M 192.324219 195.027344 C 192.101562 195.027344 191.890625 195.070312 191.6875 195.152344 C 191.484375 195.238281 191.308594 195.359375 191.152344 195.511719 C 190.996094 195.667969 190.875 195.847656 190.792969 196.050781 C 190.707031 196.253906 190.667969 196.464844 190.667969 196.683594 C 190.667969 196.902344 190.707031 197.113281 190.792969 197.316406 C 190.875 197.519531 190.996094 197.699219 191.152344 197.855469 C 191.308594 198.011719 191.484375 198.128906 191.6875 198.214844 C 191.890625 198.296875 192.101562 198.339844 192.324219 198.339844 C 192.542969 198.339844 192.753906 198.296875 192.957031 198.214844 C 193.160156 198.128906 193.339844 198.011719 193.492188 197.855469 C 193.648438 197.699219 193.769531 197.519531 193.851562 197.316406 C 193.9375 197.113281 193.980469 196.902344 193.980469 196.683594 C 193.980469 196.464844 193.9375 196.253906 193.851562 196.050781 C 193.769531 195.847656 193.648438 195.667969 193.492188 195.511719 C 193.339844 195.359375 193.160156 195.238281 192.957031 195.152344 C 192.753906 195.070312 192.542969 195.027344 192.324219 195.027344 Z M 192.324219 195.027344 " fill-opacity="1" fill-rule="nonzero"/></g><g fill="#000000" fill-opacity="1"><g transform="translate(64.620425, 265.539899)"><g><path d="M 25.53125 2.09375 C 24.644531 2.675781 23.585938 3.160156 22.359375 3.546875 C 21.128906 3.941406 19.664062 4.242188 17.96875 4.453125 C 17.820312 2.929688 17.613281 1.34375 17.34375 -0.3125 C 17.082031 -1.976562 16.75 -3.671875 16.34375 -5.390625 C 14.71875 -5.367188 13.257812 -5.316406 11.96875 -5.234375 C 10.675781 -5.160156 9.460938 -5.050781 8.328125 -4.90625 C 7.921875 -3.757812 7.5 -2.664062 7.0625 -1.625 C 6.632812 -0.59375 6.207031 0.351562 5.78125 1.21875 C 4.53125 1.007812 3.351562 0.609375 2.25 0.015625 C 1.15625 -0.578125 0.289062 -1.28125 -0.34375 -2.09375 C 1.601562 -5.71875 3.300781 -9.367188 4.75 -13.046875 C 6.195312 -16.734375 7.703125 -21.378906 9.265625 -26.984375 C 10.515625 -26.984375 11.640625 -26.925781 12.640625 -26.8125 C 13.640625 -26.695312 14.742188 -26.488281 15.953125 -26.1875 C 18.160156 -22.6875 20.070312 -18.53125 21.6875 -13.71875 C 23.3125 -8.90625 24.59375 -3.632812 25.53125 2.09375 Z M 12.421875 -18.28125 C 12.097656 -17.039062 11.734375 -15.722656 11.328125 -14.328125 C 10.921875 -12.929688 10.488281 -11.507812 10.03125 -10.0625 C 10.894531 -10.195312 11.738281 -10.300781 12.5625 -10.375 C 13.382812 -10.445312 14.210938 -10.5 15.046875 -10.53125 C 14.617188 -11.945312 14.1875 -13.300781 13.75 -14.59375 C 13.320312 -15.882812 12.878906 -17.113281 12.421875 -18.28125 Z M 12.421875 -18.28125 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(90.189202, 265.539899)"><g><path d="M 23.296875 -16.765625 C 23.296875 -13.234375 21.9375 -9.785156 19.21875 -6.421875 C 16.507812 -3.054688 13.234375 -0.800781 9.390625 0.34375 C 8.273438 0.34375 7.132812 0.296875 5.96875 0.203125 C 4.800781 0.117188 3.785156 0 2.921875 -0.15625 C 2.515625 -3.726562 2.207031 -7.113281 2 -10.3125 C 1.800781 -13.519531 1.703125 -16.515625 1.703125 -19.296875 C 1.703125 -20.234375 1.707031 -21.179688 1.71875 -22.140625 C 1.738281 -23.109375 1.773438 -24.078125 1.828125 -25.046875 C 3.523438 -25.828125 5.09375 -26.390625 6.53125 -26.734375 C 7.976562 -27.078125 9.488281 -27.25 11.0625 -27.25 C 15.039062 -27.25 18.070312 -26.347656 20.15625 -24.546875 C 22.25 -22.742188 23.296875 -20.148438 23.296875 -16.765625 Z M 9.796875 -22.71875 C 9.597656 -20.3125 9.441406 -17.820312 9.328125 -15.25 C 9.210938 -12.6875 9.15625 -10.023438 9.15625 -7.265625 C 9.15625 -6.703125 9.15625 -6.273438 9.15625 -5.984375 C 9.15625 -5.691406 9.171875 -5.429688 9.203125 -5.203125 C 11.222656 -6.265625 12.773438 -7.789062 13.859375 -9.78125 C 14.953125 -11.769531 15.5 -14.070312 15.5 -16.6875 C 15.5 -18.53125 15.035156 -20.003906 14.109375 -21.109375 C 13.191406 -22.210938 11.957031 -22.765625 10.40625 -22.765625 C 10.226562 -22.765625 10.101562 -22.765625 10.03125 -22.765625 C 9.957031 -22.765625 9.878906 -22.75 9.796875 -22.71875 Z M 9.796875 -22.71875 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(114.238284, 265.539899)"><g><path d="M 13.984375 -27.859375 C 17.023438 -27.859375 19.375 -26.863281 21.03125 -24.875 C 22.6875 -22.882812 23.515625 -20.066406 23.515625 -16.421875 C 23.515625 -14.441406 23.25 -12.429688 22.71875 -10.390625 C 22.1875 -8.347656 21.453125 -6.546875 20.515625 -4.984375 C 19.347656 -3.109375 17.925781 -1.679688 16.25 -0.703125 C 14.582031 0.273438 12.703125 0.765625 10.609375 0.765625 C 7.566406 0.765625 5.195312 -0.40625 3.5 -2.75 C 1.800781 -5.09375 0.953125 -8.269531 0.953125 -12.28125 C 0.953125 -16.863281 2.15625 -20.601562 4.5625 -23.5 C 6.96875 -26.40625 10.109375 -27.859375 13.984375 -27.859375 Z M 12.203125 -4.1875 C 13.335938 -4.1875 14.179688 -4.96875 14.734375 -6.53125 C 15.296875 -8.101562 15.578125 -10.703125 15.578125 -14.328125 C 15.578125 -17.441406 15.328125 -19.648438 14.828125 -20.953125 C 14.335938 -22.265625 13.507812 -22.921875 12.34375 -22.921875 C 11.1875 -22.921875 10.296875 -22.082031 9.671875 -20.40625 C 9.046875 -18.726562 8.734375 -16.375 8.734375 -13.34375 C 8.734375 -10.445312 9.03125 -8.195312 9.625 -6.59375 C 10.226562 -4.988281 11.085938 -4.1875 12.203125 -4.1875 Z M 12.203125 -4.1875 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(138.895242, 265.539899)"><g><path d="M 15.203125 -1.671875 C 14.085938 -1.390625 12.988281 -1.1875 11.90625 -1.0625 C 10.832031 -0.9375 9.625 -0.875 8.28125 -0.875 C 8.28125 -4.414062 8.175781 -8.242188 7.96875 -12.359375 C 7.769531 -16.484375 7.492188 -20.039062 7.140625 -23.03125 C 6.816406 -23 6.1875 -22.9375 5.25 -22.84375 C 4.3125 -22.757812 3.054688 -22.644531 1.484375 -22.5 C 1.148438 -23.382812 0.894531 -24.296875 0.71875 -25.234375 C 0.539062 -26.171875 0.453125 -27.082031 0.453125 -27.96875 C 3.921875 -28.75 7.234375 -29.3125 10.390625 -29.65625 C 13.546875 -30 17.113281 -30.171875 21.09375 -30.171875 C 21.21875 -29.742188 21.3125 -29.253906 21.375 -28.703125 C 21.4375 -28.160156 21.46875 -27.5625 21.46875 -26.90625 C 21.46875 -26.445312 21.4375 -25.953125 21.375 -25.421875 C 21.3125 -24.890625 21.203125 -24.304688 21.046875 -23.671875 C 20.085938 -23.671875 19.148438 -23.664062 18.234375 -23.65625 C 17.328125 -23.644531 16.429688 -23.613281 15.546875 -23.5625 C 15.640625 -21.988281 15.710938 -20.351562 15.765625 -18.65625 C 15.816406 -16.957031 15.84375 -15.207031 15.84375 -13.40625 C 15.84375 -11.738281 15.789062 -9.9375 15.6875 -8 C 15.59375 -6.0625 15.429688 -3.953125 15.203125 -1.671875 Z M 15.203125 -1.671875 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(160.968731, 265.539899)"><g><path d="M 22 0.375 C 21.269531 0.601562 18.921875 0.867188 14.953125 1.171875 C 10.984375 1.484375 7.671875 1.640625 5.015625 1.640625 C 4.378906 -2.390625 3.800781 -7.085938 3.28125 -12.453125 C 2.769531 -17.828125 2.488281 -22.300781 2.4375 -25.875 C 6.332031 -26.613281 9.71875 -27.140625 12.59375 -27.453125 C 15.46875 -27.773438 18.285156 -27.9375 21.046875 -27.9375 C 21.046875 -27 20.988281 -26.003906 20.875 -24.953125 C 20.757812 -23.898438 20.578125 -22.800781 20.328125 -21.65625 C 18.910156 -21.65625 17.441406 -21.628906 15.921875 -21.578125 C 14.398438 -21.535156 12.816406 -21.460938 11.171875 -21.359375 C 11.117188 -20.796875 11.078125 -20.15625 11.046875 -19.4375 C 11.023438 -18.71875 11.003906 -17.632812 10.984375 -16.1875 C 12.273438 -16.570312 13.566406 -16.851562 14.859375 -17.03125 C 16.148438 -17.207031 17.46875 -17.296875 18.8125 -17.296875 C 19.007812 -16.398438 19.160156 -15.484375 19.265625 -14.546875 C 19.367188 -13.609375 19.421875 -12.507812 19.421875 -11.25 C 17.972656 -11.25 16.539062 -11.203125 15.125 -11.109375 C 13.707031 -11.023438 12.328125 -10.90625 10.984375 -10.75 C 11.003906 -9.613281 11.039062 -8.5 11.09375 -7.40625 C 11.144531 -6.320312 11.222656 -5.285156 11.328125 -4.296875 C 12.054688 -4.296875 13.597656 -4.441406 15.953125 -4.734375 C 18.316406 -5.023438 20.09375 -5.285156 21.28125 -5.515625 C 21.476562 -4.984375 21.644531 -4.113281 21.78125 -2.90625 C 21.925781 -1.707031 22 -0.613281 22 0.375 Z M 22 0.375 "/></g></g></g><g fill="#ff5757" fill-opacity="1"><g transform="translate(184.104792, 265.539899)"><g><path d="M 20.328125 -27.0625 C 20.890625 -24.425781 21.273438 -22.242188 21.484375 -20.515625 C 21.703125 -18.796875 21.8125 -17.175781 21.8125 -15.65625 C 21.8125 -9.519531 20.84375 -4.867188 18.90625 -1.703125 C 16.96875 1.460938 14.097656 3.046875 10.296875 3.046875 C 7.359375 3.046875 5.128906 1.921875 3.609375 -0.328125 C 2.085938 -2.585938 1.328125 -5.832031 1.328125 -10.0625 C 1.328125 -12.675781 1.554688 -15.375 2.015625 -18.15625 C 2.472656 -20.945312 2.941406 -22.773438 3.421875 -23.640625 C 3.898438 -23.765625 4.488281 -23.867188 5.1875 -23.953125 C 5.882812 -24.046875 6.5625 -24.09375 7.21875 -24.09375 C 8 -24.09375 8.675781 -24.039062 9.25 -23.9375 C 9.820312 -23.832031 10.257812 -23.691406 10.5625 -23.515625 C 10.207031 -21.460938 9.941406 -19.414062 9.765625 -17.375 C 9.585938 -15.34375 9.5 -13.414062 9.5 -11.59375 C 9.5 -8.550781 9.671875 -6.175781 10.015625 -4.46875 C 10.359375 -2.757812 10.84375 -1.90625 11.46875 -1.90625 C 12.257812 -1.90625 12.859375 -2.882812 13.265625 -4.84375 C 13.671875 -6.8125 13.875 -9.628906 13.875 -13.296875 C 13.875 -15.117188 13.742188 -17.054688 13.484375 -19.109375 C 13.234375 -21.160156 12.84375 -23.328125 12.3125 -25.609375 C 13.300781 -26.046875 14.566406 -26.394531 16.109375 -26.65625 C 17.660156 -26.925781 19.066406 -27.0625 20.328125 -27.0625 Z M 20.328125 -27.0625 "/></g></g></g><g fill="#ff5757" fill-opacity="1"><g transform="translate(207.052106, 265.539899)"><g><path d="M 30.546875 0.53125 C 29.160156 1.0625 27.875 1.425781 26.6875 1.625 C 25.507812 1.832031 24.160156 1.9375 22.640625 1.9375 C 22.867188 -0.625 23.0625 -3.613281 23.21875 -7.03125 C 23.375 -10.445312 23.5 -14.066406 23.59375 -17.890625 C 22.65625 -16.328125 21.78125 -14.707031 20.96875 -13.03125 C 20.164062 -11.363281 19.421875 -9.640625 18.734375 -7.859375 C 18.128906 -7.679688 17.398438 -7.582031 16.546875 -7.5625 C 15.703125 -7.539062 14.882812 -7.601562 14.09375 -7.75 C 13.363281 -9.394531 12.578125 -11.007812 11.734375 -12.59375 C 10.898438 -14.175781 10.015625 -15.71875 9.078125 -17.21875 C 9.078125 -14.144531 9.25 -11.109375 9.59375 -8.109375 C 9.9375 -5.109375 10.398438 -2.609375 10.984375 -0.609375 C 10.296875 -0.398438 9.253906 -0.21875 7.859375 -0.0625 C 6.472656 0.0820312 5.179688 0.15625 3.984375 0.15625 C 3.503906 -3.164062 3.097656 -7.40625 2.765625 -12.5625 C 2.441406 -17.71875 2.28125 -22.257812 2.28125 -26.1875 C 3.363281 -26.945312 4.554688 -27.59375 5.859375 -28.125 C 7.171875 -28.65625 8.394531 -28.992188 9.53125 -29.140625 C 11.363281 -26.785156 12.890625 -24.632812 14.109375 -22.6875 C 15.335938 -20.738281 16.382812 -18.835938 17.25 -16.984375 C 18.21875 -19.210938 19.273438 -21.347656 20.421875 -23.390625 C 21.578125 -25.429688 22.800781 -27.335938 24.09375 -29.109375 C 25.101562 -28.953125 26.113281 -28.726562 27.125 -28.4375 C 28.144531 -28.144531 29.109375 -27.785156 30.015625 -27.359375 C 30.191406 -23.890625 30.320312 -19.660156 30.40625 -14.671875 C 30.5 -9.679688 30.546875 -4.613281 30.546875 0.53125 Z M 30.546875 0.53125 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(238.843074, 265.539899)"><g><path d="M 9.921875 -7.9375 C 9.921875 -7.03125 9.929688 -6.050781 9.953125 -5 C 9.984375 -3.945312 10.085938 -1.421875 10.265625 2.578125 C 9.117188 2.578125 7.960938 2.53125 6.796875 2.4375 C 5.628906 2.351562 4.601562 2.238281 3.71875 2.09375 C 3.238281 -1.9375 2.882812 -5.816406 2.65625 -9.546875 C 2.425781 -13.285156 2.3125 -16.914062 2.3125 -20.4375 C 2.3125 -21.226562 2.332031 -22.066406 2.375 -22.953125 C 2.414062 -23.835938 2.484375 -24.847656 2.578125 -25.984375 C 3.898438 -26.648438 5.503906 -27.1875 7.390625 -27.59375 C 9.273438 -28 11.128906 -28.203125 12.953125 -28.203125 C 16.046875 -28.203125 18.429688 -27.546875 20.109375 -26.234375 C 21.796875 -24.929688 22.640625 -23.113281 22.640625 -20.78125 C 22.640625 -17.945312 21.503906 -15.375 19.234375 -13.0625 C 16.972656 -10.757812 13.867188 -9.050781 9.921875 -7.9375 Z M 14.8125 -19.421875 C 14.8125 -20.890625 14.523438 -22.003906 13.953125 -22.765625 C 13.390625 -23.523438 12.539062 -23.90625 11.40625 -23.90625 C 11.175781 -23.90625 11.003906 -23.90625 10.890625 -23.90625 C 10.773438 -23.90625 10.664062 -23.890625 10.5625 -23.859375 C 10.414062 -22.160156 10.289062 -20.398438 10.1875 -18.578125 C 10.082031 -16.753906 10.003906 -14.84375 9.953125 -12.84375 C 11.578125 -13.269531 12.789062 -14.03125 13.59375 -15.125 C 14.40625 -16.21875 14.8125 -17.648438 14.8125 -19.421875 Z M 14.8125 -19.421875 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(262.93015, 265.539899)"><g><path d="M 22 0.375 C 21.269531 0.601562 18.921875 0.867188 14.953125 1.171875 C 10.984375 1.484375 7.671875 1.640625 5.015625 1.640625 C 4.378906 -2.390625 3.800781 -7.085938 3.28125 -12.453125 C 2.769531 -17.828125 2.488281 -22.300781 2.4375 -25.875 C 6.332031 -26.613281 9.71875 -27.140625 12.59375 -27.453125 C 15.46875 -27.773438 18.285156 -27.9375 21.046875 -27.9375 C 21.046875 -27 20.988281 -26.003906 20.875 -24.953125 C 20.757812 -23.898438 20.578125 -22.800781 20.328125 -21.65625 C 18.910156 -21.65625 17.441406 -21.628906 15.921875 -21.578125 C 14.398438 -21.535156 12.816406 -21.460938 11.171875 -21.359375 C 11.117188 -20.796875 11.078125 -20.15625 11.046875 -19.4375 C 11.023438 -18.71875 11.003906 -17.632812 10.984375 -16.1875 C 12.273438 -16.570312 13.566406 -16.851562 14.859375 -17.03125 C 16.148438 -17.207031 17.46875 -17.296875 18.8125 -17.296875 C 19.007812 -16.398438 19.160156 -15.484375 19.265625 -14.546875 C 19.367188 -13.609375 19.421875 -12.507812 19.421875 -11.25 C 17.972656 -11.25 16.539062 -11.203125 15.125 -11.109375 C 13.707031 -11.023438 12.328125 -10.90625 10.984375 -10.75 C 11.003906 -9.613281 11.039062 -8.5 11.09375 -7.40625 C 11.144531 -6.320312 11.222656 -5.285156 11.328125 -4.296875 C 12.054688 -4.296875 13.597656 -4.441406 15.953125 -4.734375 C 18.316406 -5.023438 20.09375 -5.285156 21.28125 -5.515625 C 21.476562 -4.984375 21.644531 -4.113281 21.78125 -2.90625 C 21.925781 -1.707031 22 -0.613281 22 0.375 Z M 22 0.375 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(286.067424, 265.539899)"><g><path d="M 15.203125 -1.671875 C 14.085938 -1.390625 12.988281 -1.1875 11.90625 -1.0625 C 10.832031 -0.9375 9.625 -0.875 8.28125 -0.875 C 8.28125 -4.414062 8.175781 -8.242188 7.96875 -12.359375 C 7.769531 -16.484375 7.492188 -20.039062 7.140625 -23.03125 C 6.816406 -23 6.1875 -22.9375 5.25 -22.84375 C 4.3125 -22.757812 3.054688 -22.644531 1.484375 -22.5 C 1.148438 -23.382812 0.894531 -24.296875 0.71875 -25.234375 C 0.539062 -26.171875 0.453125 -27.082031 0.453125 -27.96875 C 3.921875 -28.75 7.234375 -29.3125 10.390625 -29.65625 C 13.546875 -30 17.113281 -30.171875 21.09375 -30.171875 C 21.21875 -29.742188 21.3125 -29.253906 21.375 -28.703125 C 21.4375 -28.160156 21.46875 -27.5625 21.46875 -26.90625 C 21.46875 -26.445312 21.4375 -25.953125 21.375 -25.421875 C 21.3125 -24.890625 21.203125 -24.304688 21.046875 -23.671875 C 20.085938 -23.671875 19.148438 -23.664062 18.234375 -23.65625 C 17.328125 -23.644531 16.429688 -23.613281 15.546875 -23.5625 C 15.640625 -21.988281 15.710938 -20.351562 15.765625 -18.65625 C 15.816406 -16.957031 15.84375 -15.207031 15.84375 -13.40625 C 15.84375 -11.738281 15.789062 -9.9375 15.6875 -8 C 15.59375 -6.0625 15.429688 -3.953125 15.203125 -1.671875 Z M 15.203125 -1.671875 "/></g></g></g></svg>`;

export default () => (
  <SvgXml
    xml={xml}
    width="100%"
    height="100%"
    style={{ borderWidth: 2, borderColor: "green" }}
  />
);
