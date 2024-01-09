/* eslint-disable react/jsx-key */
import * as React from "react"
import { createIcon } from "@chakra-ui/react"

import { commonIconDefaultProps } from "../utils"

export const SwapIcon = createIcon({
  displayName: "SwapIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M99.7413 22.6488C96.8047 18.9553 91.195 18.9553 88.2584 22.6488L74.1326 40.4153L51.8916 35.8852C47.2679 34.9435 42.9707 38.5493 43.0952 43.2663L43.6943 65.9561L23.7448 76.7821C19.5975 79.0328 18.6234 84.5572 21.7508 88.0905L36.7945 105.087L28.4711 126.203C26.7408 130.593 29.5456 135.451 34.2126 136.148L56.6617 139.498L63.0019 158.46C63.445 157.023 64.1644 155.652 65.1604 154.427L70.6484 147.681L66.1327 134.175C65.2577 131.558 62.988 129.654 60.2588 129.247L39.936 126.214L47.471 107.097C48.4829 104.53 47.9684 101.612 46.1395 99.5461L32.5207 84.1596L50.5807 74.3589C53.006 73.0428 54.4874 70.4769 54.4145 67.7184L53.8722 47.1777L74.0067 51.2787C76.7105 51.8294 79.4947 50.816 81.212 48.6561L93.9999 32.5724L106.788 48.6561C108.505 50.816 111.289 51.8294 113.993 51.2787L134.128 47.1777L133.585 67.7184C133.512 70.4769 134.994 73.0428 137.419 74.3589L138.663 75.0338C140.989 74.8067 143.222 73.9024 145.07 72.3993L149.515 68.7833L144.305 65.9561L144.905 43.2663C145.029 38.5493 140.732 34.9435 136.108 35.8852L113.867 40.4153L99.7413 22.6488Z" />,
    <path d="M168.269 122.284C165.761 118.527 160.239 118.527 157.731 122.284L138.146 151.625C136.134 154.639 137.056 158.723 140.168 160.581L159.752 172.274C161.752 173.469 164.247 173.469 166.247 172.274L185.832 160.581C188.943 158.723 189.865 154.639 187.853 151.625L168.269 122.284ZM149.552 153.757L163 133.61L176.448 153.757L163 161.786L149.552 153.757Z" />,
    <path d="M158.294 202.856C160.814 206.488 166.186 206.488 168.706 202.856L186.646 176.989C190.561 171.344 183.949 164.377 178.107 167.991L163.5 177.028L148.893 167.991C143.051 164.377 136.439 171.344 140.354 176.989L158.294 202.856Z" />,
    <path d="M174.939 93.0216C168.567 87.8382 159.432 87.8382 153.06 93.0216L149.183 96.1759C147.709 97.3745 145.795 97.8875 143.92 97.5862L138.984 96.7933C130.874 95.4903 122.963 100.058 120.037 107.733L118.256 112.403C117.579 114.178 116.178 115.579 114.403 116.256L109.732 118.037C102.057 120.964 97.49 128.875 98.793 136.984L99.586 141.92C99.8873 143.795 99.3743 145.71 98.1757 147.183L95.0213 151.061C89.838 157.433 89.8379 166.567 95.0213 172.939L98.1757 176.817C99.3743 178.29 99.8873 180.205 99.586 182.08L98.793 187.015C97.49 195.125 102.057 203.036 109.732 205.963L114.403 207.744C116.178 208.42 117.579 209.822 118.256 211.597L120.037 216.267C122.963 223.942 130.874 228.51 138.984 227.207L143.92 226.414C145.795 226.112 147.709 226.625 149.183 227.824L153.06 230.978C159.432 236.162 168.567 236.162 174.939 230.978L178.817 227.824C180.29 226.625 182.205 226.112 184.08 226.414L189.015 227.207C197.125 228.51 205.036 223.942 207.963 216.267L209.744 211.597C210.42 209.822 211.822 208.42 213.597 207.744L218.267 205.963C225.942 203.036 230.509 195.125 229.206 187.015L228.413 182.08C228.112 180.205 228.625 178.29 229.824 176.817L232.978 172.939C238.161 166.567 238.161 157.433 232.978 151.061L229.824 147.183C228.625 145.71 228.112 143.795 228.413 141.92L229.206 136.984C230.509 128.875 225.942 120.964 218.267 118.037L213.597 116.256C211.822 115.579 210.42 114.178 209.744 112.403L207.963 107.733C205.036 100.058 197.125 95.4903 189.015 96.7933L184.08 97.5862C182.205 97.8875 180.29 97.3745 178.817 96.176L174.939 93.0216ZM159.794 101.299C162.244 99.3058 165.756 99.3058 168.206 101.299L172.083 104.453C175.915 107.57 180.895 108.905 185.773 108.121L190.708 107.328C193.826 106.827 196.868 108.583 197.993 111.534L199.774 116.205C201.534 120.82 205.179 124.466 209.795 126.226L214.466 128.007C217.416 129.132 219.172 132.174 218.672 135.292L217.879 140.227C217.095 145.104 218.429 150.084 221.547 153.916L224.701 157.794C226.694 160.244 226.694 163.756 224.701 166.206L221.547 170.084C218.429 173.916 217.095 178.896 217.879 183.773L218.672 188.708C219.172 191.826 217.416 194.868 214.466 195.993L209.795 197.774C205.179 199.534 201.534 203.18 199.774 207.795L197.993 212.466C196.868 215.417 193.826 217.173 190.708 216.672L185.773 215.879C180.895 215.095 175.915 216.43 172.083 219.547L168.206 222.701C165.756 224.694 162.244 224.694 159.794 222.701L155.916 219.547C152.084 216.43 147.104 215.095 142.227 215.879L137.292 216.672C134.173 217.173 131.132 215.417 130.007 212.466L128.226 207.795C126.466 203.18 122.82 199.534 118.204 197.774L113.534 195.993C110.583 194.868 108.827 191.826 109.328 188.708L110.121 183.773C110.905 178.896 109.57 173.916 106.453 170.084L103.298 166.206C101.306 163.756 101.306 160.244 103.298 157.794L106.453 153.916C109.57 150.084 110.905 145.104 110.121 140.227L109.328 135.292C108.827 132.174 110.583 129.132 113.534 128.007L118.204 126.226C122.82 124.466 126.466 120.82 128.226 116.205L130.007 111.534C131.132 108.583 134.173 106.827 137.292 107.328L142.227 108.121C147.104 108.905 152.084 107.57 155.916 104.453L159.794 101.299Z" />,
    <path d="M156.284 28.8212C156.958 31.6847 159.822 33.4617 162.686 32.7958L162.688 32.7953L162.692 32.7942L162.696 32.7935C162.698 32.793 162.699 32.7926 161.478 27.5994L162.699 32.7926L162.706 32.7913C162.731 32.7857 162.78 32.7751 162.85 32.7604C162.992 32.7311 163.221 32.6858 163.528 32.6315C164.144 32.5227 165.07 32.3791 166.237 32.2569C168.582 32.0113 171.831 31.8589 175.447 32.2205C182.712 32.9471 190.936 35.6712 196.723 43.3189C202.738 51.2673 203.693 59.4027 203.145 65.665C202.975 67.5968 202.662 69.3405 202.311 70.8259L187.246 59.1496C184.917 57.3446 181.566 57.7693 179.761 60.0981C177.956 62.4269 178.381 65.778 180.71 67.5831L203.711 85.4111C205.661 86.9218 208.391 86.8997 210.316 85.3577L233.813 66.5297C236.113 64.6873 236.483 61.3298 234.641 59.0304C232.798 56.731 229.441 56.3606 227.141 58.203L213.478 69.1508C213.596 68.3324 213.696 67.4797 213.774 66.5963C214.493 58.3901 213.216 47.432 205.232 36.8804C197.02 26.0282 185.494 22.5021 176.509 21.6035C172 21.1525 167.999 21.3439 165.125 21.645C163.682 21.7962 162.506 21.9768 161.673 22.1239C161.256 22.1976 160.924 22.263 160.685 22.3126C160.565 22.3374 160.469 22.3582 160.397 22.3741C160.361 22.3821 160.331 22.3888 160.308 22.3942L160.277 22.4012L160.26 22.4051C160.258 22.4057 160.256 22.4064 161.478 27.5994L160.256 22.4062C157.388 23.081 155.61 25.9531 156.284 28.8212Z" />,
    <path d="M94.8809 222.771C97.7444 222.105 100.608 223.882 101.282 226.745C101.957 229.613 100.179 232.486 97.3108 233.16L96.0889 227.967C94.8671 222.774 94.869 222.773 94.8709 222.773L94.8742 222.772L94.879 222.771L94.8809 222.771Z" />,
    <path d="M96.0889 227.967C97.3108 233.16 97.3086 233.161 97.3064 233.161L97.3014 233.163L97.2896 233.165L97.2589 233.172C97.2354 233.178 97.2056 233.184 97.1696 233.192C97.0978 233.208 97.0016 233.229 96.882 233.254C96.643 233.303 96.3104 233.369 95.8933 233.443C95.0601 233.59 93.8847 233.77 92.4417 233.922C89.5676 234.223 85.567 234.414 81.0578 233.963C72.0728 233.064 60.5469 229.538 52.3349 218.686C44.3505 208.135 43.0738 197.176 43.7927 188.97C43.8701 188.087 43.9706 187.234 44.0882 186.416L30.4251 197.364C28.1257 199.206 24.7681 198.835 22.9257 196.536C21.0833 194.237 21.4538 190.879 23.7531 189.037L47.251 170.209C49.1754 168.667 51.906 168.645 53.8552 170.155L76.8568 187.983C79.1856 189.788 79.6103 193.14 77.8052 195.468C76.0002 197.797 72.6491 198.222 70.3203 196.417L55.2556 184.741C54.9043 186.226 54.5913 187.97 54.422 189.902C53.8734 196.164 54.8288 204.299 60.8434 212.248C66.6306 219.895 74.8546 222.619 82.1196 223.346C85.7355 223.708 88.985 223.555 91.3298 223.31C92.4962 223.187 93.4224 223.044 94.0384 222.935C94.3459 222.881 94.5748 222.835 94.7162 222.806C94.7868 222.791 94.8355 222.781 94.861 222.775L94.8671 222.774L96.0889 227.967Z" />,
  ],
})
