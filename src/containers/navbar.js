import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useAuth0 } from '../react-auth0-spa';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { NAVBAR_PROFILE } from '../queries/index';

export default function NavBar() {
  const client = useApolloClient();
  const { logout } = useAuth0();
  const { loading, error, data } = useQuery(NAVBAR_PROFILE);
  const [open, setOpen] = useState(false);

  if (loading || !data) return null;
  if (error) return <p>There was an error: {error}</p>;

  const handleLogout = () => {
    const hosts = {
      'localhost:3000': 'http://localhost:3000',
      'swaap.co': 'https://swaap.co',
      'staging.swaap.co': 'https://staging.swaap.co'
    };
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.clear();
    logout({ returnTo: hosts[window.location.host] });
  };

  // const showQrCode = () => {
  //   navigate('scanqr')
  //   setOpen(!open);
  // }

  // Changes page link background to grey when on that page - tristan depew
  const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            background: isCurrent ? 'whiteSmoke' : 'white',
            padding: '10px',
            borderRadius: isCurrent ? '5px' : '0px'
          }
        };
      }}
    />
  );

  return (
    <>
      <header className="header">
        <div className="navContainer flex items-center px-4 py-2 shadow">
          {/* LOGO */}
          <Link to="/">
            <svg width="70" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.018 5.105a1.022 1.022 0 00-1.904-.74 9.641 9.641 0 00-.673 3.51c.007 1.214.233 2.416.67 3.55a1.021 1.021 0 001.91-.721c-.72-1.914-.721-3.746-.003-5.599zm-3.663 6.992c-1.336-2.842-1.337-5.585 0-8.385a1.297 1.297 0 00-2.34-1.117c-.834 1.75-1.251 3.518-1.251 5.29 0 1.773.416 3.546 1.248 5.315a1.296 1.296 0 002.344-1.103zM1.981 15.965a1.024 1.024 0 10-1.915.722c.72 1.915.722 3.747.004 5.6a1.022 1.022 0 101.904.74 9.657 9.657 0 00.673-3.51 10.033 10.033 0 00-.666-3.552zm4.229-1.504c-.04-.09-.083-.18-.125-.27a1.297 1.297 0 10-2.346 1.102c1.338 2.842 1.339 5.585 0 8.385a1.296 1.296 0 102.34 1.116c.044-.09.083-.182.127-.273.75-1.66 1.124-3.332 1.125-5.015.003-1.68-.372-3.364-1.121-5.043v-.002z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M30.827 21.402v.133c-.089 2.242-2.02 4.062-4.395 4.062a4.552 4.552 0 01-3.062-1.199 4.51 4.51 0 01-3.063 1.199c-2.42 0-4.395-1.887-4.395-4.193v-5.573a1.333 1.333 0 012.664 0v5.571c0 .843.776 1.531 1.73 1.531.955 0 1.732-.688 1.732-1.53V15.83a1.332 1.332 0 112.663 0v5.571c0 .843.777 1.531 1.732 1.531.954 0 1.73-.688 1.73-1.53v-5.616a1.332 1.332 0 012.664 0v5.615zM43.5 15.654v8.5a1.269 1.269 0 01-1.287 1.265c-.733 0-1.177-.576-1.177-1.265v-.267c-.954.822-2.064 1.31-3.395 1.31a5.36 5.36 0 110-10.72c1.331 0 2.441.51 3.395 1.287v-.111c0-.688.444-1.265 1.177-1.265a1.269 1.269 0 011.287 1.266zm-3.085 4.192a2.786 2.786 0 00-5.57 0c0 1.532 1.264 2.752 2.794 2.752a2.771 2.771 0 002.776-2.75v-.002zM56.375 15.654v8.5a1.269 1.269 0 01-1.29 1.265c-.732 0-1.175-.576-1.175-1.265v-.267c-.955.822-2.065 1.31-3.396 1.31a5.359 5.359 0 01-3.834-9.174 5.36 5.36 0 013.834-1.546c1.331 0 2.441.51 3.396 1.287v-.111c0-.688.444-1.265 1.176-1.265a1.27 1.27 0 011.289 1.266zm-3.085 4.192a2.786 2.786 0 00-5.571 0c0 1.532 1.264 2.752 2.795 2.752a2.771 2.771 0 002.774-2.75l.002-.002zM70 19.959a5.622 5.622 0 01-5.615 5.615 5.822 5.822 0 01-3.13-.932v5.194a1.342 1.342 0 01-2.593.524 1.344 1.344 0 01-.092-.524V15.718a1.342 1.342 0 011.354-1.332 1.368 1.368 0 011.287.933 5.54 5.54 0 013.174-.977A5.622 5.622 0 0170 19.959zm-2.686 0a2.93 2.93 0 10-2.93 2.93 2.941 2.941 0 002.93-2.93zM12.511 19.491c0 2.357-.607 4.714-1.823 7.054a1.571 1.571 0 01-2.79-1.448c1.777-3.418 1.943-6.75.502-10.15-1.32-2.718-1.82-4.692-1.82-7.046 0-2.355.608-4.714 1.824-7.054a1.571 1.571 0 012.788 1.448c-1.776 3.418-1.942 6.75-.5 10.15 1.237 2.743 1.82 4.692 1.82 7.046z"
                fill="#000"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="3.884"
                  y1="3.301"
                  x2="16.669"
                  y2="37.337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#933EFF" />
                  <stop offset="1" stopColor="#0047FF" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <div className="flex justify-end">
            <div className="flex">
              {/* DESKTOP NAV */}
              <ul className="desktop-nav flex items-center">
                <li className="p-6 desktop-link text-lg">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="p-6 desktop-link text-lg">
                  <NavLink to="contacts">Contacts</NavLink>
                </li>
                {/* <li className="p-6 desktop-link text-lg">
                  <Link to="messages">Messages</Link>
                </li> */}
                <li className="p-6 desktop-link text-lg">
                  <NavLink to="profile">Profile</NavLink>
                </li>
                <li className="p-6 desktop-link text-lg">
                  <NavLink to="settings">Settings</NavLink>
                </li>
                <li className="p-6 desktop-link text-lg">
                  <div className="">
                    <button className="" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <nav>
            <div className="mainNav" style={open ? { transform: 'translateX(0)' } : null}>
              <div>
                <div className="bg-gray-200 pt-10 shadow-sm">
                  <div className="w-32 m-auto flex-col justify-center items-center">
                    {/* SMALL IMG ROUNG */}
                    <img
                      className="rounded-full shadow-md w-32 h-32 object-cover"
                      src={data.user.picture}
                      alt={`avatar of ${data.user.name}`}
                    />
                    <p className="py-6 text-2xl text-center">{data.user.name}</p>
                    {/* <div className="pb-6">
                      {data?.user?.id && <QRCode value={data.user.id} />}
                    </div> */}
                  </div>
                  {/* <div className='flex justify-center'>
                    <button onClick={showQrCode} className='purple rounded-full flex py-2 px-4 mb-4'>
                      <svg className='mr-4' width="22" height="22" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3334 2.66668C12.687 2.66668 13.0261 2.80716 13.2762 3.05721C13.5262 3.30726 13.6667 3.64639 13.6667 4.00002V10.6667C13.6667 11.0203 13.5262 11.3594 13.2762 11.6095C13.0261 11.8595 12.687 12 12.3334 12H1.66671C1.31309 12 0.973947 11.8595 0.723898 11.6095C0.47385 11.3594 0.333374 11.0203 0.333374 10.6667V4.00002C0.333374 3.26668 0.933374 2.66668 1.66671 2.66668H3.25337L4.40671 0.366683C4.46211 0.25674 4.54687 0.164285 4.6516 0.099565C4.75633 0.0348453 4.87693 0.000389286 5.00004 1.61494e-05H9.00004C9.12428 -0.00084851 9.2463 0.0330239 9.35231 0.0978121C9.45833 0.1626 9.54413 0.255726 9.60004 0.366683L10.74 2.66668H12.3334ZM5.41337 1.33335L4.26004 3.63335C4.20464 3.74329 4.11988 3.83575 4.01515 3.90047C3.91042 3.96519 3.78982 3.99964 3.66671 4.00002H1.66671V10.6667H12.3334V4.00002H10.3334C10.2091 4.00088 10.0871 3.96701 9.9811 3.90222C9.87508 3.83743 9.78928 3.74431 9.73337 3.63335L8.59337 1.33335H5.41337ZM7.00004 9.33335C6.2928 9.33335 5.61452 9.0524 5.11442 8.5523C4.61433 8.0522 4.33337 7.37393 4.33337 6.66668C4.33337 5.95944 4.61433 5.28116 5.11442 4.78106C5.61452 4.28097 6.2928 4.00002 7.00004 4.00002C7.70728 4.00002 8.38556 4.28097 8.88566 4.78106C9.38576 5.28116 9.66671 5.95944 9.66671 6.66668C9.66671 7.37393 9.38576 8.0522 8.88566 8.5523C8.38556 9.0524 7.70728 9.33335 7.00004 9.33335ZM7.00004 8.00002C7.35366 8.00002 7.6928 7.85954 7.94285 7.60949C8.1929 7.35944 8.33337 7.0203 8.33337 6.66668C8.33337 6.31306 8.1929 5.97392 7.94285 5.72387C7.6928 5.47383 7.35366 5.33335 7.00004 5.33335C6.64642 5.33335 6.30728 5.47383 6.05723 5.72387C5.80718 5.97392 5.66671 6.31306 5.66671 6.66668C5.66671 7.0203 5.80718 7.35944 6.05723 7.60949C6.30728 7.85954 6.64642 8.00002 7.00004 8.00002Z" fill="#F7FAFC"/>
                      </svg>
                      <p className='text-white'>Scan QR</p>
                    </button>
                  </div> */}
                </div>
              </div>
              <ul className="px-6">
                <Link to="/" onClick={() => setOpen(!open)}>
                  <li className="flex items-center p-4 border-b-2">
                    <svg
                      className="mr-4"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8079 9.87311L11.7517 0.821543L11.1446 0.214512C11.0063 0.0771135 10.8193 0 10.6243 0C10.4294 0 10.2423 0.0771135 10.104 0.214512L0.440722 9.87311C0.298998 10.0143 0.186991 10.1824 0.111313 10.3676C0.0356348 10.5528 -0.00218116 10.7512 9.71477e-05 10.9512C0.00947215 11.7762 0.696191 12.4348 1.52119 12.4348H2.51728V20.0684H18.7313V12.4348H19.7485C20.1493 12.4348 20.5267 12.2778 20.8103 11.9942C20.9499 11.855 21.0605 11.6895 21.1358 11.5072C21.211 11.325 21.2493 11.1296 21.2485 10.9325C21.2485 10.534 21.0915 10.1567 20.8079 9.87311ZM11.9368 18.3809H9.31182V13.5997H11.9368V18.3809ZM17.0438 10.7473V18.3809H13.4368V13.0372C13.4368 12.5192 13.0173 12.0997 12.4993 12.0997H8.74932C8.23135 12.0997 7.81182 12.5192 7.81182 13.0372V18.3809H4.20478V10.7473H1.95478L10.6267 2.08248L11.1681 2.62389L19.2962 10.7473H17.0438Z"
                        fill="#1A202C"
                      />
                    </svg>
                    <span className="uppercase">Home</span>
                  </li>
                </Link>
                <Link to="/contacts" onClick={() => setOpen(!open)}>
                  <li className="flex items-center p-4 border-b-2">
                    <svg
                      className="mr-4"
                      background="new 0 0 20 20"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="white-svg"
                        d="M17.3175 14.4035C16.7308 13.8164 16.0454 13.3372 15.2925 12.9879C16.3542 12.1277 17.0316 10.8152 17.0316 9.34332C17.0316 6.74645 14.8659 4.61598 12.2691 4.65582C9.71202 4.69567 7.65187 6.77926 7.65187 9.34332C7.65187 10.8152 8.33155 12.1277 9.39093 12.9879C8.6379 13.3369 7.95238 13.8161 7.36593 14.4035C6.08624 15.6855 5.35968 17.3777 5.3128 19.1824C5.31218 19.2074 5.31657 19.2323 5.32571 19.2556C5.33485 19.2789 5.34856 19.3001 5.36604 19.318C5.38351 19.3359 5.40439 19.3502 5.42745 19.3599C5.45051 19.3696 5.47528 19.3746 5.5003 19.3746H6.8128C6.91358 19.3746 6.99796 19.2949 7.0003 19.1941C7.04483 17.8347 7.59562 16.5621 8.56358 15.5964C9.05891 15.0985 9.64808 14.7037 10.297 14.435C10.9459 14.1662 11.6417 14.0289 12.3441 14.0308C13.7714 14.0308 15.1144 14.5863 16.1245 15.5964C17.0901 16.5621 17.6409 17.8347 17.6878 19.1941C17.6901 19.2949 17.7745 19.3746 17.8753 19.3746H19.1878C19.2128 19.3746 19.2376 19.3696 19.2607 19.3599C19.2837 19.3502 19.3046 19.3359 19.3221 19.318C19.3395 19.3001 19.3533 19.2789 19.3624 19.2556C19.3715 19.2323 19.3759 19.2074 19.3753 19.1824C19.3284 17.3777 18.6019 15.6855 17.3175 14.4035ZM12.3441 12.3433C11.5425 12.3433 10.7878 12.0316 10.223 11.4644C9.93949 11.1832 9.71557 10.8477 9.56457 10.4781C9.41357 10.1084 9.33857 9.71213 9.34405 9.31285C9.35108 8.54411 9.65812 7.80114 10.1948 7.25035C10.7573 6.67379 11.5097 6.3527 12.3136 6.34332C13.1081 6.33629 13.8792 6.64567 14.4464 7.20114C15.0276 7.77067 15.3464 8.53239 15.3464 9.34332C15.3464 10.1449 15.0347 10.8972 14.4675 11.4644C14.1892 11.744 13.8583 11.9657 13.4938 12.1165C13.1293 12.2674 12.7385 12.3445 12.3441 12.3433ZM6.47296 9.96207C6.45187 9.75817 6.44015 9.55192 6.44015 9.34332C6.44015 8.97067 6.4753 8.60739 6.54093 8.25348C6.55733 8.1691 6.5128 8.08239 6.43546 8.04723C6.11671 7.90426 5.82374 7.70739 5.57062 7.45895C5.27235 7.16975 5.03764 6.82155 4.88147 6.43656C4.7253 6.05158 4.65109 5.63828 4.66358 5.22301C4.68468 4.47067 4.98702 3.75582 5.51437 3.21676C6.09327 2.62379 6.8714 2.30035 7.69874 2.30973C8.4464 2.31676 9.16827 2.60504 9.71437 3.11598C9.89952 3.28942 10.0589 3.4816 10.1925 3.68785C10.2394 3.76051 10.3308 3.79098 10.4105 3.76285C10.823 3.61989 11.2589 3.5191 11.7066 3.47223C11.8378 3.45817 11.9128 3.31754 11.8542 3.20035C11.0925 1.69332 9.53624 0.652698 7.73624 0.624573C5.13702 0.58473 2.9714 2.7152 2.9714 5.30973C2.9714 6.7816 3.64874 8.0941 4.71046 8.95426C3.96515 9.29879 3.27843 9.77457 2.68312 10.3699C1.39874 11.6519 0.672178 13.3441 0.625303 15.1511C0.624677 15.1761 0.629065 15.201 0.638207 15.2243C0.647349 15.2476 0.661061 15.2688 0.678535 15.2868C0.696009 15.3047 0.716891 15.3189 0.73995 15.3286C0.76301 15.3383 0.78778 15.3433 0.812803 15.3433H2.12765C2.22843 15.3433 2.3128 15.2636 2.31515 15.1629C2.35968 13.8035 2.91046 12.5308 3.87843 11.5652C4.56749 10.8761 5.41124 10.398 6.33233 10.166C6.42374 10.1425 6.48468 10.0558 6.47296 9.96207Z"
                        fill="#1A202C"
                      />
                    </svg>
                    <span className="uppercase">Contacts</span>
                  </li>
                </Link>
                <Link to="/profile" onClick={() => setOpen(!open)}>
                  <li className="flex items-center p-4 border-b-2">
                    <svg
                      className="mr-4"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00003 0.142822C3.21292 0.142822 0.142883 3.21286 0.142883 6.99997C0.142883 10.7871 3.21292 13.8571 7.00003 13.8571C10.7871 13.8571 13.8572 10.7871 13.8572 6.99997C13.8572 3.21286 10.7871 0.142822 7.00003 0.142822ZM7.00003 1.47001C10.0562 1.47001 12.53 3.94331 12.53 6.99997C12.53 7.95333 12.2893 8.84998 11.8653 9.63258C11.4947 8.90282 10.8277 8.31806 10.0021 8.06838C10.3786 7.49238 10.5807 6.81936 10.5807 6.11517C10.5807 4.13631 8.97923 2.53453 7.00003 2.53453C5.02116 2.53453 3.41938 4.13597 3.41938 6.11517C3.41938 6.81936 3.6215 7.49238 3.99792 8.06838C3.17338 8.31773 2.50589 8.9018 2.13475 9.63258C1.71079 8.85004 1.47007 7.95338 1.47007 6.99997C1.47007 3.94381 3.94337 1.47001 7.00003 1.47001ZM4.78804 6.11517C4.78804 4.89352 5.77838 3.90319 7.00003 3.90319C8.22168 3.90319 9.21201 4.89352 9.21201 6.11517C9.21201 7.33682 8.22168 8.32715 7.00003 8.32715C5.77838 8.32715 4.78804 7.33682 4.78804 6.11517ZM3.13108 10.9523C3.17308 10.0123 3.94824 9.26299 4.89864 9.26299H5.29047C6.35048 9.84056 7.65002 9.84034 8.70961 9.26299H9.10141C10.0518 9.26299 10.827 10.0123 10.869 10.9523C8.71932 13.0568 5.27941 13.0555 3.13108 10.9523Z"
                        fill="#1A202C"
                      />
                    </svg>
                    <span className="uppercase">Profile</span>
                  </li>
                </Link>
                <Link to="/settings" onClick={() => setOpen(!open)}>
                  <li className="flex items-center p-4 border-b-2">
                    <svg
                      className="main-nav-link mr-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 2.58V2C7 0.9 7.9 0 9 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V2.58C13.6884 2.85906 14.3346 3.23265 14.92 3.69L15.42 3.4C15.6477 3.26735 15.8993 3.181 16.1605 3.1459C16.4216 3.11081 16.6871 3.12766 16.9417 3.1955C17.1963 3.26333 17.435 3.38081 17.6441 3.54118C17.8532 3.70156 18.0285 3.90166 18.16 4.13L19.16 5.87C19.4247 6.32893 19.4966 6.87416 19.3597 7.386C19.2228 7.89783 18.8885 8.33445 18.43 8.6L17.93 8.89C18.0324 9.62646 18.0324 10.3735 17.93 11.11L18.43 11.41C18.8858 11.6755 19.2182 12.1103 19.3549 12.6197C19.4916 13.1292 19.4216 13.672 19.16 14.13L18.16 15.87C17.8944 16.3285 17.4578 16.6628 16.946 16.7997C16.4342 16.9366 15.8889 16.8647 15.43 16.6L14.93 16.3C14.3427 16.7652 13.6931 17.1456 13 17.43V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H9C8.46956 20 7.96086 19.7893 7.58579 19.4142C7.21071 19.0391 7 18.5304 7 18V17.42C6.31157 17.1409 5.66536 16.7673 5.08 16.31L4.58 16.6C4.35233 16.7327 4.10069 16.819 3.83954 16.8541C3.57839 16.8892 3.31288 16.8723 3.05827 16.8045C2.80365 16.7367 2.56495 16.6192 2.35588 16.4588C2.14681 16.2984 1.97149 16.0983 1.84 15.87L0.839998 14.13C0.575261 13.6711 0.503442 13.1258 0.640306 12.614C0.777171 12.1022 1.11153 11.6656 1.57 11.4L2.07 11.11C1.9676 10.3735 1.9676 9.62646 2.07 8.89L1.57 8.59C1.11424 8.3245 0.781808 7.8897 0.645086 7.38027C0.508364 6.87084 0.578418 6.32803 0.839998 5.87L1.84 4.13C2.10555 3.67154 2.54217 3.33717 3.054 3.20031C3.56584 3.06344 4.11106 3.13526 4.57 3.4L5.07 3.7C5.65725 3.23482 6.30693 2.85444 7 2.57V2.58ZM5.88 5.64L5.34 6.15L3.57 5.13L2.57 6.87L4.33 7.88L4.16 8.61C3.9431 9.52397 3.9431 10.476 4.16 11.39L4.33 12.12L2.57 13.13L3.57 14.87L5.34 13.85L5.88 14.36C6.55944 15.008 7.38148 15.4875 8.28 15.76L9 15.96V18H11V15.96L11.71 15.76C12.6121 15.489 13.4377 15.0094 14.12 14.36L14.66 13.85L16.43 14.87L17.43 13.13L15.67 12.12L15.84 11.39C16.0569 10.476 16.0569 9.52397 15.84 8.61L15.67 7.88L17.43 6.87L16.43 5.13L14.66 6.15L14.12 5.64C13.4406 4.99198 12.6185 4.51245 11.72 4.24L11 4.04V2H9V4.04L8.29 4.24C7.38791 4.51103 6.5623 4.99063 5.88 5.64ZM10 14C8.93913 14 7.92172 13.5786 7.17157 12.8284C6.42143 12.0783 6 11.0609 6 10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14ZM10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8C9.46957 8 8.96086 8.21071 8.58578 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58578 11.4142C8.96086 11.7893 9.46957 12 10 12Z"
                        fill="#1A202C"
                      />
                    </svg>
                    <span className="uppercase">Settings</span>
                  </li>
                </Link>
              </ul>
              {/* LOGOUT BUTTON */}
              <li className="flex justify-center mt-6">
                <button
                  data-testid="logout-button"
                  className="bg-gray-200 w-1/2 shadow br-black text-xl py-2 px-6 rounded-lg hover:bg-black-400 hover:shadow-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </div>
          </nav>
          <button
            open={open}
            onClick={() => setOpen(!open)}
            className={`mobile-nav focus:outline-none navToggle ${open ? 'open' : null}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          open={open}
          onClick={() => setOpen(!open)}
          className={`overlay ${open ? 'open' : ''}`}
        />
      </header>
    </>
  );
}
