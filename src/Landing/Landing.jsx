import React from "react";
import './Landing.css';
import MyImage from '../assets/MyImage.jpeg'
import AiSummarizer from '../assets/AiSummarizer.png'
import MedAi from '../assets/MedAi.png'


const Landing = () => {
  return (
    <div className="page">
     <div className="navbar">
  <ul className="linkscontainer">
    <li><a href="heading">HOE</a></li>
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#">REALIZATIONS</a></li>
    <li><a href="#">CONTACT</a></li>
  </ul>
</div>

      <div className="hero">
        <div className="heading">
          <h1>Frontend developer</h1>
        </div>
        <div className="subheading">
          <p>
            Harikrishnan, 20 years old. A passionate young web <br /> developer
            that loves creating, imaginating and coding things to <br /> make
            them real, accessible.
          </p>
        </div>
      </div>
      <div class="heroillustrations">
        <div className="round">
          <div className="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="182"
              height="182"
              viewBox="0 0 182 182"
              fill="none"
            >
              <circle cx="91" cy="91" r="91" fill="#4356FF" />
              <path
                d="M16.0252 61.8192C15.3225 61.642 14.6772 61.7656 14.0894 62.1898C13.5016 62.6141 13.0506 63.2375 12.7363 64.0602C12.5065 64.6618 12.4028 65.2253 12.4251 65.7508C12.4491 66.2719 12.5832 66.7235 12.8275 67.1058C13.0734 67.4835 13.4131 67.7552 13.8466 67.9208C14.2093 68.0593 14.5541 68.0922 14.881 68.0194C15.2051 67.9404 15.5058 67.7968 15.783 67.5885C16.0558 67.3784 16.305 67.1441 16.5305 66.8856C16.7515 66.6254 16.9434 66.3819 17.106 66.1551L18.0047 64.917C18.2327 64.5986 18.5114 64.254 18.8406 63.883C19.1715 63.5076 19.5545 63.175 19.9897 62.885C20.4221 62.5889 20.9071 62.3941 21.4447 62.3004C21.9822 62.2066 22.5695 62.2814 23.2064 62.5247C23.9407 62.8052 24.5306 63.251 24.9764 63.8622C25.4238 64.469 25.6819 65.2063 25.7509 66.074C25.8216 66.9373 25.6575 67.8909 25.2588 68.9347C24.8871 69.9078 24.4082 70.6905 23.8222 71.2826C23.2378 71.8704 22.587 72.2604 21.8699 72.4528C21.1544 72.6407 20.4149 72.6193 19.6516 72.3886L20.3004 70.6901C20.8303 70.8418 21.3209 70.8315 21.7719 70.6591C22.2202 70.4807 22.6149 70.1905 22.956 69.7885C23.2943 69.3805 23.5665 68.9067 23.7726 68.3671C24.0125 67.739 24.1262 67.1362 24.1137 66.5586C24.0967 65.9794 23.9604 65.4737 23.7048 65.0415C23.4448 64.6077 23.067 64.2962 22.5717 64.1069C22.1205 63.9346 21.7052 63.9204 21.3258 64.0644C20.9464 64.2084 20.5897 64.4523 20.2557 64.7961C19.9216 65.1398 19.597 65.5252 19.2819 65.9522L18.1655 67.4417C17.4548 68.3867 16.6981 69.0607 15.8954 69.4637C15.0927 69.8667 14.2336 69.8933 13.318 69.5435C12.5572 69.2529 11.9723 68.7938 11.5633 68.1662C11.1515 67.5325 10.9221 66.8062 10.875 65.9874C10.8251 65.1625 10.9658 64.3166 11.2969 63.4496C11.6315 62.5738 12.0858 61.8553 12.6601 61.2941C13.2299 60.7312 13.8606 60.3538 14.5523 60.1618C15.2457 59.9655 15.9394 59.9871 16.6334 60.2269L16.0252 61.8192Z"
                fill="white"
              />
              <path
                d="M29.1819 41.8568L28.151 43.285C27.6792 43.0729 27.2116 42.9602 26.7483 42.9469C26.2876 42.9297 25.8437 42.9947 25.4164 43.1417C24.988 43.2821 24.5898 43.494 24.2218 43.7772C23.8538 44.0605 23.5285 44.398 23.2458 44.7895C22.7304 45.5036 22.4438 46.2808 22.3862 47.121C22.3314 47.9573 22.532 48.7999 22.9879 49.6488C23.4466 50.4937 24.1865 51.2848 25.2077 52.022C26.2289 52.7591 27.2128 53.2124 28.1592 53.3817C29.1084 53.5471 29.9713 53.4722 30.7479 53.1568C31.5272 52.8376 32.1746 52.3209 32.69 51.6069C32.9727 51.2153 33.1906 50.8003 33.3436 50.3618C33.4966 49.9233 33.5742 49.4801 33.5764 49.032C33.5776 48.5774 33.4975 48.1342 33.3362 47.7024C33.1738 47.264 32.9196 46.8557 32.5736 46.4775L33.6046 45.0493C34.1297 45.5919 34.5278 46.1771 34.7987 46.8048C35.0697 47.4325 35.2198 48.0781 35.2489 48.7415C35.2743 49.4021 35.1835 50.0578 34.9766 50.7084C34.7724 51.3553 34.4556 51.9762 34.0261 52.5713C33.3 53.5771 32.4086 54.2943 31.3518 54.7227C30.2951 55.1512 29.1516 55.263 27.9213 55.0582C26.691 54.8533 25.454 54.3019 24.2101 53.4041C22.9662 52.5062 22.0534 51.5056 21.4716 50.4024C20.8898 49.2992 20.6359 48.1787 20.7098 47.0408C20.7837 45.9029 21.1837 44.831 21.9098 43.8251C22.3393 43.2301 22.8289 42.7338 23.3786 42.3364C23.931 41.9352 24.5267 41.6439 25.1655 41.4627C25.8005 41.2788 26.4586 41.2166 27.1397 41.2761C27.817 41.3329 28.4977 41.5264 29.1819 41.8568Z"
                fill="white"
              />
              <path
                d="M42.7272 42.169L33.5226 30.9064L37.3281 27.7962C38.208 27.0771 39.0531 26.6372 39.8634 26.4764C40.6707 26.3119 41.4227 26.3791 42.1195 26.678C42.8162 26.9769 43.4358 27.4581 43.9781 28.1217C44.5204 28.7853 44.8657 29.4845 45.0139 30.2195C45.1621 30.9545 45.0755 31.6979 44.7543 32.4496C44.4301 33.1977 43.8317 33.9283 42.9592 34.6414L39.8795 37.1583L38.8728 35.9264L41.9084 33.4455C42.5097 32.9541 42.9217 32.4706 43.1445 31.995C43.3709 31.5164 43.4348 31.0484 43.3361 30.5909C43.2381 30.1268 43.0048 29.6693 42.6363 29.2183C42.2677 28.7674 41.8613 28.4422 41.417 28.2427C40.9727 28.0432 40.4905 28.0032 39.9704 28.1225C39.4473 28.2381 38.8815 28.5447 38.2729 29.042L35.8752 31.0016L44.091 41.0543L42.7272 42.169ZM43.8936 32.777L50.8002 35.5711L49.2164 36.8655L42.3538 34.0354L43.8936 32.777Z"
                fill="white"
              />
              <path
                d="M65.0185 20.1933C65.6412 21.5954 65.9262 22.9194 65.8735 24.1655C65.8207 25.4116 65.476 26.5076 64.8392 27.4536C64.2025 28.3995 63.3172 29.1243 62.1835 29.6278C61.0497 30.1313 59.9185 30.3022 58.7897 30.1404C57.661 29.9785 56.6167 29.4994 55.6568 28.7031C54.697 27.9067 53.9057 26.8075 53.283 25.4054C52.6603 24.0034 52.3753 22.6794 52.4281 21.4333C52.4808 20.1872 52.8255 19.0911 53.4623 18.1452C54.0991 17.1992 54.9843 16.4745 56.1181 15.971C57.2518 15.4674 58.383 15.2966 59.5118 15.4584C60.6406 15.6202 61.6849 16.0993 62.6447 16.8957C63.6046 17.6921 64.3958 18.7913 65.0185 20.1933ZM63.4607 20.8852C62.9495 19.7341 62.3255 18.8482 61.5886 18.2274C60.8561 17.6046 60.0729 17.2349 59.2388 17.1184C58.409 16.9999 57.5917 17.1194 56.7869 17.4769C55.982 17.8343 55.3432 18.3615 54.8704 19.0585C54.402 19.7535 54.1511 20.5825 54.1176 21.5455C54.0885 22.5065 54.3296 23.5625 54.8408 24.7136C55.352 25.8646 55.9739 26.7515 56.7064 27.3743C57.4432 27.9951 58.2265 28.3648 59.0563 28.4833C59.8903 28.5998 60.7098 28.4794 61.5147 28.1219C62.3195 27.7644 62.9562 27.2382 63.4246 26.5432C63.8974 25.8462 64.1483 25.0172 64.1774 24.0562C64.2108 23.0932 63.9719 22.0363 63.4607 20.8852Z"
                fill="white"
              />
              <path
                d="M75.8893 24.7392L73.6065 10.374L75.3461 10.0975L77.3836 22.9196L84.0612 21.8585L84.3064 23.4016L75.8893 24.7392Z"
                fill="white"
              />
              <path
                d="M92.2852 23.0787L93.3804 8.57453L95.1368 8.70716L94.1592 21.6533L100.901 22.1624L100.784 23.7204L92.2852 23.0787Z"
                fill="white"
              />
              <path
                d="M118.75 28.5345L125.462 15.6302L127.024 16.443L124.035 22.1894L130.916 25.7683L133.905 20.0219L135.468 20.8347L128.756 33.7389L127.193 32.9261L130.195 27.1545L123.314 23.5756L120.312 29.3473L118.75 28.5345Z"
                fill="white"
              />
              <path
                d="M135.395 38.544L145.129 27.7357L151.652 33.6103L150.607 34.7713L145.392 30.0754L142.103 33.7275L146.98 38.1192L145.934 39.2802L141.058 34.8885L137.75 38.5616L143.048 43.3336L142.003 44.4946L135.395 38.544Z"
                fill="white"
              />
              <path
                d="M147.013 50.2184L159.036 42.0314L161.802 46.0938C162.442 47.033 162.806 47.9133 162.896 48.7345C162.989 49.5531 162.857 50.2964 162.498 50.9644C162.14 51.6325 161.606 52.2077 160.898 52.69C160.19 53.1724 159.463 53.4553 158.718 53.5388C157.973 53.6223 157.24 53.4713 156.519 53.0857C155.802 52.6975 155.126 52.0376 154.492 51.1062L152.253 47.8187L153.568 46.9233L155.775 50.1638C156.212 50.8056 156.658 51.2582 157.112 51.5217C157.569 51.789 158.03 51.8935 158.494 51.8351C158.965 51.7779 159.441 51.5854 159.923 51.2576C160.404 50.9299 160.763 50.5533 161.001 50.1281C161.238 49.7029 161.32 49.2261 161.247 48.6975C161.177 48.1663 160.921 47.5759 160.479 46.9263L158.736 44.3667L148.005 51.6742L147.013 50.2184ZM156.268 52.1997L152.882 58.8362L151.73 57.1455L155.148 50.556L156.268 52.1997Z"
                fill="white"
              />
              <path
                d="M155.983 65.1999L169.606 60.1029L172.682 68.3246L171.219 68.8722L168.76 62.3001L164.157 64.0223L166.456 70.1687L164.993 70.7162L162.693 64.5698L158.063 66.302L160.562 72.9806L159.099 73.5281L155.983 65.1999Z"
                fill="white"
              />
              <path
                d="M166.341 120.753C167.043 120.93 167.689 120.807 168.276 120.383C168.864 119.958 169.315 119.335 169.63 118.512C169.859 117.911 169.963 117.347 169.941 116.822C169.917 116.3 169.783 115.849 169.538 115.467C169.292 115.089 168.953 114.817 168.519 114.652C168.157 114.513 167.812 114.48 167.485 114.553C167.161 114.632 166.86 114.776 166.583 114.984C166.31 115.194 166.061 115.428 165.835 115.687C165.614 115.947 165.422 116.191 165.26 116.417L164.361 117.655C164.133 117.974 163.854 118.318 163.525 118.689C163.194 119.065 162.811 119.397 162.376 119.687C161.944 119.983 161.459 120.178 160.921 120.272C160.384 120.366 159.796 120.291 159.159 120.048C158.425 119.767 157.835 119.321 157.389 118.71C156.942 118.103 156.684 117.366 156.615 116.498C156.544 115.635 156.708 114.682 157.107 113.638C157.479 112.665 157.958 111.882 158.544 111.29C159.128 110.702 159.779 110.312 160.496 110.12C161.211 109.932 161.951 109.953 162.714 110.184L162.065 111.882C161.536 111.731 161.045 111.741 160.594 111.913C160.146 112.092 159.751 112.382 159.41 112.784C159.072 113.192 158.799 113.666 158.593 114.205C158.353 114.833 158.24 115.436 158.252 116.014C158.269 116.593 158.405 117.099 158.661 117.531C158.921 117.965 159.299 118.276 159.794 118.465C160.245 118.638 160.661 118.652 161.04 118.508C161.419 118.364 161.776 118.12 162.11 117.776C162.444 117.433 162.769 117.047 163.084 116.62L164.2 115.131C164.911 114.186 165.668 113.512 166.47 113.109C167.273 112.706 168.132 112.679 169.048 113.029C169.809 113.319 170.394 113.779 170.803 114.406C171.214 115.04 171.444 115.766 171.491 116.585C171.541 117.41 171.4 118.256 171.069 119.123C170.734 119.999 170.28 120.717 169.706 121.278C169.136 121.841 168.505 122.219 167.814 122.411C167.12 122.607 166.426 122.585 165.732 122.345L166.341 120.753Z"
                fill="white"
              />
              <path
                d="M153.184 140.716L154.215 139.287C154.687 139.499 155.154 139.612 155.618 139.626C156.078 139.643 156.522 139.578 156.949 139.431C157.378 139.29 157.776 139.078 158.144 138.795C158.512 138.512 158.837 138.174 159.12 137.783C159.635 137.069 159.922 136.292 159.98 135.451C160.034 134.615 159.834 133.772 159.378 132.924C158.919 132.079 158.179 131.288 157.158 130.55C156.137 129.813 155.153 129.36 154.207 129.191C153.257 129.025 152.395 129.1 151.618 129.416C150.839 129.735 150.191 130.251 149.676 130.966C149.393 131.357 149.175 131.772 149.022 132.211C148.869 132.649 148.792 133.092 148.789 133.54C148.788 133.995 148.868 134.438 149.03 134.87C149.192 135.308 149.446 135.717 149.792 136.095L148.761 137.523C148.236 136.98 147.838 136.395 147.567 135.768C147.296 135.14 147.146 134.494 147.117 133.831C147.092 133.17 147.182 132.515 147.389 131.864C147.593 131.217 147.91 130.596 148.34 130.001C149.066 128.995 149.957 128.278 151.014 127.85C152.071 127.421 153.214 127.309 154.445 127.514C155.675 127.719 156.912 128.27 158.156 129.168C159.4 130.066 160.312 131.067 160.894 132.17C161.476 133.273 161.73 134.394 161.656 135.532C161.582 136.67 161.182 137.741 160.456 138.747C160.027 139.342 159.537 139.839 158.987 140.236C158.435 140.637 157.839 140.928 157.2 141.11C156.565 141.294 155.907 141.356 155.226 141.296C154.549 141.24 153.868 141.046 153.184 140.716Z"
                fill="white"
              />
              <path
                d="M139.639 140.403L148.843 151.666L145.038 154.776C144.158 155.495 143.313 155.935 142.502 156.096C141.695 156.26 140.943 156.193 140.246 155.894C139.55 155.596 138.93 155.114 138.388 154.451C137.845 153.787 137.5 153.088 137.352 152.353C137.204 151.618 137.29 150.875 137.612 150.123C137.936 149.375 138.534 148.644 139.407 147.931L142.486 145.414L143.493 146.646L140.457 149.127C139.856 149.618 139.444 150.102 139.221 150.577C138.995 151.056 138.931 151.524 139.03 151.981C139.128 152.446 139.361 152.903 139.73 153.354C140.098 153.805 140.505 154.13 140.949 154.33C141.393 154.529 141.875 154.569 142.395 154.45C142.919 154.334 143.484 154.028 144.093 153.53L146.491 151.571L138.275 141.518L139.639 140.403ZM138.472 149.795L131.566 147.001L133.149 145.707L140.012 148.537L138.472 149.795Z"
                fill="white"
              />
              <path
                d="M117.347 162.379C116.725 160.977 116.44 159.653 116.492 158.407C116.545 157.161 116.89 156.065 117.527 155.119C118.163 154.173 119.049 153.448 120.182 152.945C121.316 152.441 122.447 152.27 123.576 152.432C124.705 152.594 125.749 153.073 126.709 153.869C127.669 154.666 128.46 155.765 129.083 157.167C129.706 158.569 129.991 159.893 129.938 161.139C129.885 162.385 129.54 163.481 128.904 164.427C128.267 165.373 127.382 166.098 126.248 166.601C125.114 167.105 123.983 167.276 122.854 167.114C121.725 166.952 120.681 166.473 119.721 165.677C118.761 164.88 117.97 163.781 117.347 162.379ZM118.905 161.687C119.416 162.838 120.04 163.724 120.777 164.345C121.51 164.968 122.293 165.337 123.127 165.454C123.957 165.572 124.774 165.453 125.579 165.096C126.384 164.738 127.023 164.211 127.495 163.514C127.964 162.819 128.215 161.99 128.248 161.027C128.277 160.066 128.036 159.01 127.525 157.859C127.014 156.708 126.392 155.821 125.659 155.198C124.923 154.577 124.139 154.208 123.31 154.089C122.476 153.973 121.656 154.093 120.851 154.45C120.046 154.808 119.41 155.334 118.941 156.029C118.468 156.726 118.218 157.555 118.188 158.516C118.155 159.479 118.394 160.536 118.905 161.687Z"
                fill="white"
              />
              <path
                d="M106.477 157.833L108.759 172.198L107.02 172.475L104.982 159.653L98.3046 160.714L98.0594 159.171L106.477 157.833Z"
                fill="white"
              />
              <path
                d="M90.0807 159.494L88.9854 173.998L87.2291 173.865L88.2067 160.919L81.4645 160.41L81.5822 158.852L90.0807 159.494Z"
                fill="white"
              />
              <path
                d="M63.6161 154.038L56.9041 166.942L55.3415 166.129L58.3304 160.383L51.4499 156.804L48.4609 162.55L46.8983 161.738L53.6103 148.833L55.1729 149.646L52.1709 155.418L59.0515 158.997L62.0535 153.225L63.6161 154.038Z"
                fill="white"
              />
              <path
                d="M46.9707 144.028L37.2367 154.837L30.7137 148.962L31.7593 147.801L36.9735 152.497L40.2625 148.845L35.3861 144.453L36.4318 143.292L41.3082 147.684L44.6162 144.011L39.3176 139.239L40.3632 138.078L46.9707 144.028Z"
                fill="white"
              />
              <path
                d="M35.3525 132.354L23.3298 140.541L20.5635 136.479C19.9239 135.539 19.5594 134.659 19.4699 133.838C19.3765 133.019 19.509 132.276 19.8676 131.608C20.2261 130.94 20.7595 130.365 21.4679 129.882C22.1762 129.4 22.903 129.117 23.6481 129.034C24.3932 128.95 25.1262 129.101 25.847 129.487C26.564 129.875 27.2396 130.535 27.8738 131.466L30.1125 134.754L28.7975 135.649L26.5908 132.409C26.1538 131.767 25.7081 131.314 25.2537 131.051C24.7967 130.783 24.336 130.679 23.8717 130.737C23.4008 130.794 22.9247 130.987 22.4433 131.315C21.9619 131.643 21.6025 132.019 21.365 132.444C21.1276 132.869 21.0456 133.346 21.1191 133.875C21.1886 134.406 21.4446 134.996 21.887 135.646L23.6299 138.206L34.3611 130.898L35.3525 132.354ZM26.0981 130.373L29.4841 123.736L30.6354 125.427L27.2174 132.016L26.0981 130.373Z"
                fill="white"
              />
              <path
                d="M26.3831 117.373L12.7599 122.47L9.68378 114.248L11.1472 113.7L13.6061 120.272L18.2093 118.55L15.9096 112.404L17.3731 111.856L19.6727 118.003L24.3024 116.27L21.8037 109.592L23.2671 109.044L26.3831 117.373Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="mouse">
          <p>I</p>
        </div>
        </div>
      </div>

      <div id="about" className="about">
        
        <div className="AboutContent">
            <h3 id="hey">Hey, Welcome here !</h3>
            <hr id="line"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, consectetur nisi. Repudiandae dolorum recusandae quam dolores velit tempora et accusamus commodi ad, atque suscipit quos quasi vero provident optio dolorem? <br />
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Incidunt pariatur ab saepe delectus?</p>
        </div>
        <div>
           <img src={MyImage}/>
        </div>
      </div>
      <div className="realizations">
        <div className="realheading">
            <h3>Realizations</h3>
            <hr />
        </div>
        <div className="Aisummarizer">
            <img src={AiSummarizer} id="Aisumphoto" />
            <div className="aboutaisum">
                <h3>Ai Summarizer</h3>
                <p id="aisumabout">powerful tool designed to condense lengthy pieces of text or content into concise and coherent summaries. Leveraging cutting-edge natural language processing algorithms, it provides users with the ability to extract the most essential information from documents, articles, or any textual content, saving time and improving overall efficiency in information consumption. </p>
            </div>
            


        </div>
        <div className="MedAi">
            <img src={MedAi} id="medai" />
            <div className="aboutmedai">
                <h3>Med AI</h3>
                <p id="medaiabout">Med AI is a cutting-edge telemedicine web application designed to revolutionize healthcare accessibility. Leveraging the power of artificial intelligence, it provides patients with convenient access to medical professionals from the comfort of their homes.</p>
            </div>

        </div>
      </div>

      <div className="contact">
        <div className="wantme">
            <h4>Want to have me in your team?</h4>
        </div>
        <div className="lets">
            <button>Let's get started</button>

        </div>
        <div className="mail">
            <a href="mailto:harikrishnanb24@gmail.com">harikrishnanb24@gmail.com</a>
        </div>
        <div className="copyright">
        <p>© 2023 Harikrishnan, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;