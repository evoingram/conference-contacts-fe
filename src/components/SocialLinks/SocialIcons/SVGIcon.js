import React from 'react';
import {AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai';


const SVGIcon = React.memo(({ id, type, classes, onClick, fill}) => (

  <div
    id={id}
    onClick={onClick}
  >
    {type === 'EMAIL' ? (
      
      <AiOutlineMail className={classes} />

    ) : type === 'INSTAGRAM' ? (

      <AiOutlineInstagram className={classes} />

    ) : type === 'FACEBOOK' ? (

      <AiOutlineFacebook className={classes} />
      
    ) : type === 'LINKEDIN' ? (

      <AiOutlineLinkedin className={classes} />

    ) : type === 'TWITTER' ? (

      <AiOutlineTwitter className={classes}/>

    ) : type === 'DELETE' ? (
      <path
        d="M7.27016 6.99915L9.59171 4.6776C9.80276 4.46655 9.80276 4.11934 9.59171 3.90829C9.38066 3.69724 9.03345 3.69724 8.8224 3.90829L6.50085 6.22984L4.1793 3.90829C3.96825 3.69724 3.62104 3.69724 3.40999 3.90829C3.30446 4.01381 3.25 4.15338 3.25 4.29294C3.25 4.43251 3.30446 4.57207 3.40999 4.6776L5.73154 6.99915L3.40999 9.3207C3.30446 9.42623 3.25 9.56579 3.25 9.70536C3.25 9.84492 3.30446 9.98449 3.40999 10.09C3.62104 10.3011 3.96825 10.3011 4.1793 10.09L6.50085 7.76846L8.8224 10.09C9.03345 10.3011 9.38066 10.3011 9.59171 10.09C9.80276 9.87896 9.80276 9.53175 9.59171 9.3207L7.27016 6.99915Z"
        fill={fill || '#9A99A2'}
      />
    ) : type === 'CAMERA' ? (
      <>
        <path
          d="M28.6875 8.23438H24.1719L23.0961 5.21953C23.0218 5.01323 22.8856 4.83491 22.7061 4.70893C22.5266 4.58294 22.3126 4.51543 22.0934 4.51563H11.9066C11.4584 4.51563 11.0566 4.79785 10.9072 5.21953L9.82812 8.23438H5.3125C3.84492 8.23438 2.65625 9.42305 2.65625 10.8906V26.0313C2.65625 27.4988 3.84492 28.6875 5.3125 28.6875H28.6875C30.1551 28.6875 31.3438 27.4988 31.3438 26.0313V10.8906C31.3438 9.42305 30.1551 8.23438 28.6875 8.23438ZM28.9531 26.0313C28.9531 26.1773 28.8336 26.2969 28.6875 26.2969H5.3125C5.16641 26.2969 5.04688 26.1773 5.04688 26.0313V10.8906C5.04688 10.7445 5.16641 10.625 5.3125 10.625H11.5115L12.0793 9.03789L12.8396 6.90625H21.157L21.9174 9.03789L22.4852 10.625H28.6875C28.8336 10.625 28.9531 10.7445 28.9531 10.8906V26.0313ZM17 12.75C14.0648 12.75 11.6875 15.1273 11.6875 18.0625C11.6875 20.9977 14.0648 23.375 17 23.375C19.9352 23.375 22.3125 20.9977 22.3125 18.0625C22.3125 15.1273 19.9352 12.75 17 12.75ZM17 21.25C15.2402 21.25 13.8125 19.8223 13.8125 18.0625C13.8125 16.3027 15.2402 14.875 17 14.875C18.7598 14.875 20.1875 16.3027 20.1875 18.0625C20.1875 19.8223 18.7598 21.25 17 21.25Z"
          fill={fill || '#F7FAFC'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5434 16.1276C17.5434 15.8268 17.2996 15.583 16.9988 15.583C16.698 15.583 16.4542 15.8268 16.4542 16.1276V17.5914L14.7145 17.5915C14.4137 17.5915 14.1699 17.8353 14.1699 18.1361C14.1699 18.4369 14.4138 18.6807 14.7146 18.6807L16.4542 18.6807V20.0438C16.4542 20.3446 16.698 20.5884 16.9988 20.5884C17.2996 20.5884 17.5434 20.3446 17.5434 20.0438V18.6806L19.2896 18.6806C19.5904 18.6806 19.8342 18.4367 19.8342 18.1359C19.8342 17.8351 19.5903 17.5913 19.2895 17.5913L17.5434 17.5914V16.1276Z"
          fill={fill || '#F7FAFC'}
        />
      </>
    ) : type === 'MORE' ? (
      <>
        <path
          d="M12 12.8571C12.4734 12.8571 12.8572 12.4734 12.8572 12C12.8572 11.5266 12.4734 11.1428 12 11.1428C11.5266 11.1428 11.1429 11.5266 11.1429 12C11.1429 12.4734 11.5266 12.8571 12 12.8571Z"
          stroke={fill || '#4A5568'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12.8571C18.4734 12.8571 18.8572 12.4734 18.8572 12C18.8572 11.5266 18.4734 11.1428 18 11.1428C17.5266 11.1428 17.1429 11.5266 17.1429 12C17.1429 12.4734 17.5266 12.8571 18 12.8571Z"
          stroke={fill || '#4A5568'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00003 12.8571C6.47341 12.8571 6.85717 12.4734 6.85717 12C6.85717 11.5266 6.47341 11.1428 6.00003 11.1428C5.52664 11.1428 5.14288 11.5266 5.14288 12C5.14288 12.4734 5.52664 12.8571 6.00003 12.8571Z"
          stroke={fill || '#4A5568'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : type === 'MINUS-CIRCLE' ? (
      <path
        d="M12.242 22C9.53635 22 6.94152 20.9464 5.02834 19.0711C3.11516 17.1957 2.04034 14.6522 2.04034 12C2.04034 9.34784 3.11516 6.8043 5.02834 4.92893C6.94152 3.05357 9.53635 2 12.242 2C14.9476 2 17.5425 3.05357 19.4557 4.92893C21.3688 6.8043 22.4437 9.34784 22.4437 12C22.4437 14.6522 21.3688 17.1957 19.4557 19.0711C17.5425 20.9464 14.9476 22 12.242 22ZM12.242 20C14.4065 20 16.4824 19.1571 18.0129 17.6569C19.5435 16.1566 20.4033 14.1217 20.4033 12C20.4033 9.87827 19.5435 7.84344 18.0129 6.34315C16.4824 4.84285 14.4065 4 12.242 4C10.0775 4 8.00162 4.84285 6.47107 6.34315C4.94053 7.84344 4.08068 9.87827 4.08068 12C4.08068 14.1217 4.94053 16.1566 6.47107 17.6569C8.00162 19.1571 10.0775 20 12.242 20ZM16.3227 12C16.3227 12.2652 16.2152 12.5196 16.0239 12.7071C15.8325 12.8946 15.5731 13 15.3025 13H9.1815C8.91094 13 8.65146 12.8946 8.46014 12.7071C8.26882 12.5196 8.16134 12.2652 8.16134 12C8.16134 11.7348 8.26882 11.4804 8.46014 11.2929C8.65146 11.1054 8.91094 11 9.1815 11H15.3025C15.5731 11 15.8325 11.1054 16.0239 11.2929C16.2152 11.4804 16.3227 11.7348 16.3227 12Z"
        fill={fill || '#4A5568'}
      />
    ) : type === 'LOCK' ? (
      <path
        d="M4.82221 6.8888V4.82213C4.82221 3.90861 5.1851 3.0325 5.83106 2.38654C6.47702 1.74058 7.35313 1.37769 8.26665 1.37769C9.18017 1.37769 10.0563 1.74058 10.7022 2.38654C11.3482 3.0325 11.7111 3.90861 11.7111 4.82213V6.8888H13.0889C13.4543 6.8888 13.8047 7.03396 14.0631 7.29234C14.3215 7.55072 14.4667 7.90117 14.4667 8.26657V13.7777C14.4667 14.1431 14.3215 14.4935 14.0631 14.7519C13.8047 15.0103 13.4543 15.1555 13.0889 15.1555H3.44443C3.07902 15.1555 2.72858 15.0103 2.47019 14.7519C2.21181 14.4935 2.06665 14.1431 2.06665 13.7777V8.26657C2.06665 7.5088 2.68665 6.8888 3.44443 6.8888H4.82221ZM6.19998 6.8888H10.3333V4.82213C10.3333 4.27402 10.1156 3.74835 9.728 3.36078C9.34043 2.9732 8.81476 2.75546 8.26665 2.75546C7.71854 2.75546 7.19287 2.9732 6.8053 3.36078C6.41772 3.74835 6.19998 4.27402 6.19998 4.82213V6.8888ZM3.44443 8.26657V13.7777H13.0889V8.26657H3.44443ZM8.26665 9.64435C8.44936 9.64435 8.62458 9.71693 8.75377 9.84612C8.88296 9.97532 8.95554 10.1505 8.95554 10.3332V11.711C8.95554 11.8937 8.88296 12.0689 8.75377 12.1981C8.62458 12.3273 8.44936 12.3999 8.26665 12.3999C8.08395 12.3999 7.90872 12.3273 7.77953 12.1981C7.65034 12.0689 7.57776 11.8937 7.57776 11.711V10.3332C7.57776 10.1505 7.65034 9.97532 7.77953 9.84612C7.90872 9.71693 8.08395 9.64435 8.26665 9.64435V9.64435Z"
        fill={fill || '#1A202C'}
      />
    ) : type === 'GLOBE' ? (
      <path
        d="M2.79704 8.95571C2.92337 9.95859 3.32308 10.9074 3.95245 11.6984C4.58183 12.4894 5.41661 13.092 6.36549 13.4404C5.81784 12.0082 5.53313 10.489 5.52504 8.95571H2.79704ZM2.79704 7.57793H5.52504C5.53313 6.04466 5.81784 4.52542 6.36549 3.09326C5.41661 3.44165 4.58183 4.04429 3.95245 4.83525C3.32308 5.62622 2.92337 6.57505 2.79704 7.57793V7.57793ZM13.7366 7.57793C13.6103 6.57505 13.2106 5.62622 12.5812 4.83525C11.9518 4.04429 11.117 3.44165 10.1682 3.09326C10.7158 4.52542 11.0005 6.04466 11.0086 7.57793H13.7366ZM13.7366 8.95571H11.0086C11.0005 10.489 10.7158 12.0082 10.1682 13.4404C11.117 13.092 11.9518 12.4894 12.5812 11.6984C13.2106 10.9074 13.6103 9.95859 13.7366 8.95571V8.95571ZM6.90282 8.95571C7.01304 11.6768 7.75015 13.7779 8.26682 13.7779C8.78349 13.7779 9.5206 11.6768 9.63082 8.95571H6.90282V8.95571ZM6.90282 7.57793H9.63082C9.5206 4.85682 8.78349 2.75571 8.26682 2.75571C7.75015 2.75571 7.01304 4.85682 6.90282 7.57793V7.57793ZM8.26682 15.1557C6.43977 15.1557 4.68756 14.4299 3.39564 13.138C2.10372 11.8461 1.37793 10.0939 1.37793 8.26682C1.37793 6.43977 2.10372 4.68756 3.39564 3.39564C4.68756 2.10372 6.43977 1.37793 8.26682 1.37793C10.0939 1.37793 11.8461 2.10372 13.138 3.39564C14.4299 4.68756 15.1557 6.43977 15.1557 8.26682C15.1557 10.0939 14.4299 11.8461 13.138 13.138C11.8461 14.4299 10.0939 15.1557 8.26682 15.1557V15.1557Z"
        fill={fill || '#4A5568'}
      />
    ) : type === 'PLUS' ? (
      <>
      <path 
        d="M11.2969 3.5625H12.7031C12.8281 3.5625 12.8906 3.625 12.8906 3.75V20.25C12.8906 20.375 12.8281 20.4375 12.7031 20.4375H11.2969C11.1719 20.4375 11.1094 20.375 11.1094 20.25V3.75C11.1094 3.625 11.1719 3.5625 11.2969 3.5625Z" 
        fill={fill || '#000000'}
      />
      <path 
        d="M4.125 11.1094H19.875C20 11.1094 20.0625 11.1719 20.0625 11.2969V12.7031C20.0625 12.8281 20 12.8906 19.875 12.8906H4.125C4 12.8906 3.9375 12.8281 3.9375 12.7031V11.2969C3.9375 11.1719 4 11.1094 4.125 11.1094Z" 
        fill={fill || '#000000'}
      />
      </>
    ) : type === 'SWAAP' ? (
      <>
        <path
          d="M12.5411 3.81955C12.588 3.69874 12.5851 3.56424 12.5328 3.44563C12.4806 3.32703 12.3834 3.23403 12.2625 3.18711C12.1417 3.14018 12.0072 3.14317 11.8886 3.19541C11.77 3.24765 11.677 3.34487 11.6301 3.46568C11.4192 4.00038 11.3101 4.5698 11.3085 5.14459C11.3115 5.7251 11.42 6.30023 11.6285 6.84199C11.6742 6.96321 11.7662 7.06133 11.8842 7.11475C12.0022 7.16817 12.1366 7.17253 12.2578 7.12685C12.3791 7.08118 12.4772 6.98922 12.5306 6.8712C12.584 6.75318 12.5884 6.61878 12.5427 6.49755C12.1979 5.58221 12.1975 4.7058 12.5411 3.81955ZM10.7891 7.16361C10.1497 5.80436 10.1494 4.49269 10.7891 3.1531C10.856 3.01255 10.8675 2.852 10.8215 2.70332C10.7755 2.55463 10.6752 2.42869 10.5407 2.35051C10.4061 2.27233 10.247 2.24762 10.095 2.28128C9.94309 2.31495 9.80935 2.40454 9.72039 2.53225C9.70098 2.55969 9.68401 2.58876 9.66967 2.61915C9.27058 3.45624 9.07124 4.3016 9.07124 5.14931C9.07124 5.99703 9.27019 6.84552 9.66809 7.69127C9.68272 7.72283 9.70023 7.75297 9.72039 7.78131C9.8095 7.90782 9.94273 7.99641 10.0939 8.02966C10.245 8.0629 10.4031 8.03839 10.5371 7.96096C10.6711 7.88352 10.7712 7.75875 10.8178 7.6112C10.8645 7.46364 10.8542 7.30398 10.7891 7.16361ZM4.39191 9.01396C4.36924 8.9538 4.33495 8.8987 4.29098 8.8518C4.24702 8.8049 4.19425 8.76712 4.13569 8.74061C4.07713 8.71411 4.01391 8.69939 3.94967 8.69732C3.88542 8.69524 3.82139 8.70583 3.76123 8.7285C3.70108 8.75117 3.64598 8.78546 3.59908 8.82942C3.55218 8.87339 3.5144 8.92616 3.48789 8.98472C3.46138 9.04328 3.44667 9.10649 3.44459 9.17074C3.44251 9.23499 3.45311 9.29902 3.47578 9.35918C3.8206 10.2753 3.82139 11.1517 3.47774 12.038C3.43082 12.1588 3.43381 12.2933 3.48605 12.4119C3.53829 12.5305 3.63551 12.6235 3.75632 12.6704C3.87713 12.7173 4.01163 12.7143 4.13023 12.6621C4.24884 12.6099 4.34184 12.5126 4.38876 12.3918C4.59949 11.8571 4.70857 11.2877 4.71039 10.7129C4.70793 10.132 4.60002 9.55634 4.39191 9.01396ZM6.41447 8.29442C6.3952 8.25117 6.37515 8.20831 6.35509 8.16506C6.32107 8.09039 6.27257 8.02322 6.2124 7.96744C6.15222 7.91165 6.08157 7.86837 6.00455 7.84009C5.92752 7.81181 5.84565 7.79909 5.76367 7.80269C5.6817 7.80628 5.60125 7.82612 5.527 7.86103C5.45274 7.89595 5.38616 7.94525 5.3311 8.00609C5.27604 8.06693 5.2336 8.1381 5.20625 8.21546C5.1789 8.29282 5.16717 8.37484 5.17175 8.45676C5.17633 8.53869 5.19713 8.61889 5.23294 8.69272C5.87265 10.052 5.87305 11.364 5.23294 12.7032C5.19788 12.7767 5.17764 12.8564 5.17337 12.9378C5.16911 13.0191 5.18091 13.1004 5.20809 13.1772C5.23527 13.254 5.27731 13.3246 5.3318 13.3851C5.38629 13.4457 5.45216 13.4949 5.52566 13.5299C5.59916 13.565 5.67885 13.5852 5.76017 13.5895C5.8415 13.5937 5.92286 13.5819 5.99963 13.5548C6.07639 13.5276 6.14705 13.4855 6.20757 13.4311C6.26809 13.3766 6.31728 13.3107 6.35234 13.2372C6.37318 13.1935 6.39166 13.1499 6.41289 13.1063C6.77122 12.312 6.95051 11.5125 6.95077 10.7078C6.95235 9.90453 6.77305 9.09849 6.41447 8.2956V8.29442Z"
          fill={fill || '#4A5568'}
        />
        <path
          d="M9.42904 10.7009C9.42904 11.8281 9.13848 12.9554 8.55695 14.0748C8.46278 14.2476 8.30462 14.3766 8.11643 14.434C7.92824 14.4915 7.72502 14.4729 7.55039 14.3822C7.37576 14.2915 7.24365 14.136 7.18241 13.949C7.12118 13.762 7.1357 13.5584 7.22286 13.382C8.07215 11.7472 8.15197 10.154 7.46232 8.52694C6.83086 7.22706 6.5918 6.28302 6.5918 5.15693C6.5918 4.03084 6.88276 2.90239 7.46428 1.78298C7.50977 1.69541 7.57206 1.61766 7.6476 1.55416C7.72314 1.49066 7.81045 1.44266 7.90454 1.41291C7.99862 1.38315 8.09765 1.37222 8.19597 1.38073C8.29428 1.38925 8.38996 1.41704 8.47753 1.46253C8.5651 1.50802 8.64285 1.57031 8.70635 1.64585C8.76985 1.72139 8.81784 1.8087 8.8476 1.90279C8.87736 1.99688 8.88829 2.09591 8.87978 2.19422C8.87126 2.29253 8.84346 2.38821 8.79797 2.47578C7.94869 4.11065 7.86926 5.70385 8.55892 7.33086C9.15066 8.64254 9.42904 9.57479 9.42904 10.7009Z"
          fill={fill || '#4A5568'}
        />
      </>
    ) : type === 'CHECK' ? (
      <path
        d="M18.8569 6.85742L9.42829 16.286L5.14258 12.0003"
        stroke={fill || '#4A5568'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : type === 'GLOBAL' ? (
      <path
        d="M20.025 18.7711C20.0297 18.7641 20.0367 18.757 20.0414 18.75C21.5766 16.9242 22.5 14.5711 22.5 12C22.5 9.42891 21.5766 7.07578 20.0438 5.25C20.0391 5.24297 20.032 5.23828 20.0273 5.23125C20.0016 5.20078 19.9781 5.17266 19.9523 5.14453C19.943 5.13281 19.9336 5.12344 19.9242 5.11172L19.8281 5.00156L19.8258 4.99922C19.7906 4.95938 19.7531 4.91953 19.718 4.87969L19.7156 4.87734C19.6406 4.79766 19.5656 4.71797 19.4883 4.64062L19.4859 4.63828L19.3734 4.52578L19.3664 4.51875C19.3312 4.48359 19.2961 4.45078 19.2609 4.41797C19.2492 4.40625 19.2375 4.39453 19.2234 4.38281C19.2 4.35938 19.1766 4.33828 19.1531 4.31719C19.1461 4.31016 19.1367 4.30312 19.1297 4.29375C17.2594 2.55937 14.7539 1.5 12 1.5C9.24609 1.5 6.74062 2.55937 4.86797 4.29375C4.86094 4.30078 4.85156 4.30781 4.84453 4.31719C4.82109 4.33828 4.79766 4.36172 4.77422 4.38516C4.7625 4.39688 4.75078 4.40859 4.73672 4.42031C4.70156 4.45313 4.66641 4.48828 4.63125 4.52109L4.62422 4.52812L4.51172 4.64062L4.50937 4.64297C4.43203 4.72031 4.35703 4.8 4.28203 4.87969L4.27969 4.88203C4.24219 4.92188 4.20703 4.96172 4.17188 5.00156L4.16953 5.00391C4.13672 5.03906 4.10391 5.07656 4.07344 5.11406C4.06406 5.12578 4.05469 5.13516 4.04531 5.14688C4.01953 5.175 3.99609 5.20547 3.97031 5.23359C3.96562 5.24063 3.95859 5.24531 3.95391 5.25234C2.42344 7.07578 1.5 9.42891 1.5 12C1.5 14.5711 2.42344 16.9242 3.95625 18.75C3.96094 18.757 3.96797 18.7641 3.97266 18.7711L4.04531 18.8578C4.05469 18.8695 4.06406 18.8789 4.07344 18.8906L4.16953 19.0008C4.16953 19.0031 4.17188 19.0031 4.17188 19.0055C4.20703 19.0453 4.24219 19.0852 4.27969 19.1227L4.28203 19.125C4.35703 19.2047 4.43203 19.2844 4.50703 19.3617L4.50937 19.3641C4.54687 19.4016 4.58203 19.4391 4.61953 19.4742L4.62656 19.4813C4.70391 19.5586 4.78359 19.6336 4.86328 19.7062C6.74062 21.4406 9.24609 22.5 12 22.5C14.7539 22.5 17.2594 21.4406 19.132 19.7062C19.2119 19.6331 19.29 19.558 19.3664 19.4813L19.3734 19.4742C19.4109 19.4367 19.4484 19.4016 19.4836 19.3641L19.4859 19.3617C19.5633 19.2844 19.6383 19.2047 19.7109 19.125L19.7133 19.1227C19.7484 19.0828 19.7859 19.0453 19.8211 19.0055C19.8211 19.0031 19.8234 19.0031 19.8234 19.0008C19.8562 18.9656 19.8891 18.9281 19.9195 18.8906C19.9289 18.8789 19.9383 18.8695 19.9477 18.8578C19.9742 18.8296 19.9999 18.8006 20.025 18.7711ZM20.1211 15.4289C19.7977 16.193 19.3711 16.9008 18.8508 17.543C18.2648 17.0365 17.6241 16.5971 16.9406 16.2328C17.2125 15.1336 17.3813 13.9266 17.4258 12.6562H20.7891C20.7188 13.6148 20.4937 14.5453 20.1211 15.4289ZM20.7891 11.3438H17.4258C17.3813 10.0734 17.2125 8.86641 16.9406 7.76719C17.6273 7.40156 18.2672 6.96094 18.8508 6.45703C19.9818 7.84916 20.6584 9.55485 20.7891 11.3438ZM15.4289 3.87891C16.3594 4.27266 17.2055 4.81641 17.9508 5.50078C17.5178 5.86944 17.0518 6.19739 16.5586 6.48047C16.1906 5.42578 15.7195 4.50938 15.1711 3.77578C15.2578 3.80859 15.3445 3.84375 15.4289 3.87891ZM13.3055 20.2992C13.0898 20.468 12.8742 20.5969 12.6562 20.6836V16.3359C13.5862 16.4008 14.5008 16.6079 15.368 16.95C15.1734 17.5266 14.9484 18.0586 14.6883 18.5391C14.2805 19.2984 13.8023 19.9055 13.3055 20.2992ZM14.6883 5.46094C14.9461 5.94375 15.1734 6.47578 15.368 7.05C14.5008 7.39209 13.5862 7.59918 12.6562 7.66406V3.31875C12.8719 3.40547 13.0898 3.53203 13.3055 3.70312C13.8023 4.09453 14.2805 4.70156 14.6883 5.46094ZM12.6562 15.0211V12.6562H16.1133C16.0758 13.6922 15.9469 14.6977 15.7313 15.6516L15.7242 15.6797C14.7406 15.3067 13.7063 15.0847 12.6562 15.0211ZM12.6562 11.3438V8.97891C13.7297 8.91328 14.7609 8.68594 15.7242 8.32031L15.7313 8.34844C15.9469 9.30234 16.0758 10.3055 16.1133 11.3438H12.6562ZM11.3438 12.6562V15.0211C10.2703 15.0867 9.23906 15.3141 8.27578 15.6797L8.26875 15.6516C8.05312 14.6977 7.92422 13.6945 7.88672 12.6562H11.3438ZM7.88672 11.3438C7.92422 10.3078 8.05312 9.30234 8.26875 8.34844L8.27578 8.32031C9.23906 8.68594 10.268 8.91328 11.3438 8.97891V11.3438H7.88672ZM11.3438 16.3359V20.6813C11.1281 20.5945 10.9102 20.468 10.6945 20.2969C10.1977 19.9055 9.71719 19.2961 9.30938 18.5367C9.05156 18.0539 8.82422 17.5219 8.62969 16.9477C9.50156 16.6055 10.4086 16.4016 11.3438 16.3359ZM11.3438 7.66406C10.4138 7.59918 9.49924 7.39209 8.63203 7.05C8.82656 6.47344 9.05156 5.94141 9.31172 5.46094C9.71953 4.70156 10.1977 4.09219 10.6969 3.70078C10.9125 3.53203 11.1281 3.40313 11.3461 3.31641V7.66406H11.3438ZM8.57109 3.87891C8.65781 3.84375 8.74219 3.80859 8.82891 3.77578C8.28047 4.50938 7.80937 5.42578 7.44141 6.48047C6.94922 6.19922 6.48281 5.87109 6.04922 5.50078C6.79453 4.81641 7.64063 4.27266 8.57109 3.87891ZM3.87891 8.57109C4.20234 7.80703 4.62891 7.09922 5.14922 6.45703C5.73281 6.96094 6.37266 7.40156 7.05938 7.76719C6.7875 8.86641 6.61875 10.0734 6.57422 11.3438H3.21094C3.28125 10.3852 3.50625 9.45469 3.87891 8.57109ZM3.21094 12.6562H6.57422C6.61875 13.9266 6.7875 15.1336 7.05938 16.2328C6.37589 16.5971 5.73521 17.0365 5.14922 17.543C4.01819 16.1508 3.34164 14.4451 3.21094 12.6562ZM8.57109 20.1211C7.64063 19.7273 6.79453 19.1836 6.04922 18.4992C6.48281 18.1289 6.94922 17.8031 7.44141 17.5195C7.80937 18.5742 8.28047 19.4906 8.82891 20.2242C8.74219 20.1914 8.65547 20.1562 8.57109 20.1211ZM15.4289 20.1211C15.3422 20.1562 15.2578 20.1914 15.1711 20.2242C15.7195 19.4906 16.1906 18.5742 16.5586 17.5195C17.0508 17.8008 17.5172 18.1289 17.9508 18.4992C17.2096 19.1807 16.3565 19.7294 15.4289 20.1211Z"
        fill={fill || '#718096'}
      />
    ) : type === 'TOGGLE OFF' ? (
      <>
        <path
          d="M18 7H10C6.13401 7 3 10.134 3 14C3 17.866 6.13401 21 10 21H18C21.866 21 25 17.866 25 14C25 10.134 21.866 7 18 7Z"
          stroke="#9A99A2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 17C11.6569 17 13 15.6569 13 14C13 12.3431 11.6569 11 10 11C8.34315 11 7 12.3431 7 14C7 15.6569 8.34315 17 10 17Z"
          stroke="#9A99A2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : type === 'TOGGLE ON' ? (
      <>
        <path
          d="M18 7H10C6.13401 7 3 10.134 3 14C3 17.866 6.13401 21 10 21H18C21.866 21 25 17.866 25 14C25 10.134 21.866 7 18 7Z"
          stroke="#6640FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 17C19.6569 17 21 15.6569 21 14C21 12.3431 19.6569 11 18 11C16.3431 11 15 12.3431 15 14C15 15.6569 16.3431 17 18 17Z"
          stroke="#6640FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : type === 'TRASH' ? (
      <path
        d="M8 6V4C8 2.9 8.9 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H20V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V8H3C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H8ZM6 8V20H18V8H6ZM14 6V4H10V6H14ZM10 10C10.2652 10 10.5196 10.1054 10.7071 10.2929C10.8946 10.4804 11 10.7348 11 11V17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17V11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10ZM14 10C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10Z"
        fill={fill || '#718096'}
      />
    ) : type === 'BACK' ? (
      <path
        d="M14 21L7 14L14 7"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : null}
  </div>
));

export default SVGIcon;
