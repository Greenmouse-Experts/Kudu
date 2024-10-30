"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar({ mobile }) {

    const pathname = usePathname();
    
    return (
        <div className={`h-full bg-white rounded-md flex-col ${mobile ? 'w-full lg:hidden md:hidden flex overflow-auto' : 'md:w-[22%] lg:flex md:hidden hidden custom-scrollbar overflow-auto h-[650px] fixed'} bg-mobiDarkCloud transition-all mb-10`}>
            {/* Logo */}
            <div className="py-6 px-4 flex gap-2 flex-col space-x-2 border-bottom">
                <div className='flex px-3 justify-center'>
                    <img src="/images/kudum1.png" alt="Logo" className="w-[160px]" />
                </div>
                <div className='w-full h-[1px] border-mobiSilverDivider border-bottom border'></div>
            </div>

            {/* Navigation Items */}
            <nav className="px-4 space-y-2">
                <Link href={'/superadmin'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/superadmin' ? 'bg-kuduOrangeFade text-white' : 'hover:bg-kuduLightGray  text-mobiRomanSilver'} transition`}>
                    <i className="mr-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H8.2C8.48003 21 8.62004 21 8.727 20.9455C8.82108 20.8976 8.89757 20.8211 8.9455 20.727C9 20.62 9 20.48 9 20.2V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V20.2C15 20.48 15 20.62 15.0545 20.727C15.1024 20.8211 15.1789 20.8976 15.273 20.9455C15.38 21 15.52 21 15.8 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764Z"
                            stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </i>
                    <span className="text-sm font-[500]">Dashboard</span>
                </Link>
                <Link href={'/superadmin/users'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/superadmin/users' ? 'bg-kuduOrangeFade' : 'hover:bg-kuduLightGray  text-mobiRomanSilver'} transition`}>
                    <i className="mr-3">
                        <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.50855 19.577L7.50852 19.577C6.96322 19.6566 6.55146 20.1334 6.55146 20.7072V20.7076C6.55075 20.9577 6.63252 21.2009 6.7841 21.3998C7.07156 21.7741 7.36665 22.1424 7.66919 22.5046L7.8748 22.7508H7.55406H6.00786H5.935L5.88996 22.6935C5.79237 22.5694 5.69426 22.443 5.59507 22.3144C5.23889 21.8524 5.05146 21.283 5.05146 20.7078C5.05146 19.4124 5.98691 18.2839 7.29177 18.0934C11.5405 17.4725 14.4973 17.5287 18.719 18.113C20.0111 18.2915 20.9514 19.4034 20.9515 20.6915C20.9515 20.6915 20.9515 20.6916 20.9515 20.6916H20.8015C20.8019 21.2547 20.6078 21.8008 20.2519 22.2372L7.50855 19.577ZM7.50855 19.577C11.5996 18.9793 14.413 19.0305 18.5129 19.5981L7.50855 19.577ZM14.3217 13.1876C13.9031 13.361 13.4545 13.4502 13.0015 13.4502C12.0865 13.4502 11.2089 13.0867 10.5619 12.4397C9.91495 11.7927 9.55147 10.9152 9.55147 10.0002C9.55147 9.0852 9.91495 8.20768 10.5619 7.56068C11.2089 6.91368 12.0865 6.5502 13.0015 6.5502C13.4545 6.5502 13.9031 6.63943 14.3217 6.81281C14.7403 6.98619 15.1206 7.24031 15.441 7.56068C15.7613 7.88104 16.0155 8.26136 16.1888 8.67994C16.3622 9.09851 16.4515 9.54713 16.4515 10.0002C16.4515 10.4533 16.3622 10.9019 16.1888 11.3205C16.0155 11.739 15.7613 12.1194 15.441 12.4397C15.1206 12.7601 14.7403 13.0142 14.3217 13.1876ZM13.0015 14.9502C14.3143 14.9502 15.5733 14.4287 16.5016 13.5004C17.4299 12.5721 17.9515 11.313 17.9515 10.0002C17.9515 8.68737 17.4299 7.42832 16.5016 6.50002C15.5733 5.57171 14.3143 5.0502 13.0015 5.0502C11.6886 5.0502 10.4296 5.57171 9.50129 6.50002C8.57298 7.42832 8.05146 8.68737 8.05146 10.0002C8.05146 11.313 8.57298 12.5721 9.50129 13.5004C10.4296 14.4287 11.6886 14.9502 13.0015 14.9502Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                            <path d="M23.65 13C23.65 18.8818 18.8818 23.65 13 23.65C7.11824 23.65 2.35 18.8818 2.35 13C2.35 7.11824 7.11824 2.35 13 2.35C18.8818 2.35 23.65 7.11824 23.65 13ZM13 25.15C19.7104 25.15 25.15 19.7104 25.15 13C25.15 6.28956 19.7104 0.85 13 0.85C6.28956 0.85 0.85 6.28956 0.85 13C0.85 19.7104 6.28956 25.15 13 25.15Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                        </svg>
                    </i>
                    <span className={`${pathname === '/superadmin/users' ? 'text-mobiPink' : ''} text-sm font-[500]`}>Users</span>
                </Link>
                <Link href={'/superadmin/organisations'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/superadmin/organisations' ? 'bg-kuduOrangeFade' : 'hover:bg-kuduLightGray  text-mobiRomanSilver'} transition`}>
                    <i className="mr-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3048 8.8421C16.464 8.8421 17.4048 9.83242 17.4048 11.0526V15.1579H17.4V15.4737C17.4 15.7249 17.3052 15.9659 17.1364 16.1436C16.9676 16.3212 16.7387 16.4211 16.5 16.4211C16.2613 16.4211 16.0324 16.3212 15.8636 16.1436C15.6948 15.9659 15.6 15.7249 15.6 15.4737V12.6316H15.6048V11.0526C15.6048 10.9689 15.5732 10.8886 15.5169 10.8293C15.4607 10.7701 15.3844 10.7368 15.3048 10.7368H8.7024C8.62283 10.7368 8.54653 10.7701 8.49027 10.8293C8.43401 10.8886 8.4024 10.9689 8.4024 11.0526V15.1579H8.4V15.4737C8.4 15.7249 8.30518 15.9659 8.1364 16.1436C7.96761 16.3212 7.73869 16.4211 7.5 16.4211C7.2613 16.4211 7.03239 16.3212 6.8636 16.1436C6.69482 15.9659 6.6 15.7249 6.6 15.4737V12.6316H6.6024V11.0526C6.6024 9.83242 7.542 8.8421 8.7024 8.8421H15.3048ZM22.2 11.0526V15.4737C22.2 15.7249 22.2948 15.9659 22.4636 16.1436C22.6324 16.3212 22.8613 16.4211 23.1 16.4211C23.3387 16.4211 23.5676 16.3212 23.7364 16.1436C23.9052 15.9659 24 15.7249 24 15.4737V11.0526C24 10.4664 23.7787 9.90411 23.3849 9.48955C22.9911 9.075 22.457 8.8421 21.9 8.8421H17.85C18.2616 9.36632 18.5304 10.0194 18.5916 10.7368H21.9C21.9796 10.7368 22.0559 10.7701 22.1121 10.8293C22.1684 10.8886 22.2 10.9689 22.2 11.0526ZM0 15.4737C5.03012e-09 15.7249 0.094821 15.9659 0.263604 16.1436C0.432386 16.3212 0.661305 16.4211 0.9 16.4211C1.13869 16.4211 1.36761 16.3212 1.5364 16.1436C1.70518 15.9659 1.8 15.7249 1.8 15.4737V11.0526C1.8 10.9689 1.83161 10.8886 1.88787 10.8293C1.94413 10.7701 2.02043 10.7368 2.1 10.7368H5.4156C5.47529 10.0409 5.73384 9.38032 6.1572 8.8421H2.1C1.54305 8.8421 1.0089 9.075 0.615076 9.48955C0.221249 9.90411 0 10.4664 0 11.0526V15.4737ZM12 0C12.9548 0 13.8705 0.399247 14.5456 1.10991C15.2207 1.82058 15.6 2.78444 15.6 3.78947C15.6 4.7945 15.2207 5.75837 14.5456 6.46904C13.8705 7.1797 12.9548 7.57895 12 7.57895C11.0452 7.57895 10.1295 7.1797 9.45442 6.46904C8.77928 5.75837 8.4 4.7945 8.4 3.78947C8.4 2.78444 8.77928 1.82058 9.45442 1.10991C10.1295 0.399247 11.0452 0 12 0ZM12 1.89474C11.5226 1.89474 11.0648 2.09436 10.7272 2.44969C10.3896 2.80502 10.2 3.28696 10.2 3.78947C10.2 4.29199 10.3896 4.77392 10.7272 5.12925C11.0648 5.48459 11.5226 5.68421 12 5.68421C12.4774 5.68421 12.9352 5.48459 13.2728 5.12925C13.6104 4.77392 13.8 4.29199 13.8 3.78947C13.8 3.28696 13.6104 2.80502 13.2728 2.44969C12.9352 2.09436 12.4774 1.89474 12 1.89474ZM19.8 1.26316C20.5956 1.26316 21.3587 1.59586 21.9213 2.18808C22.4839 2.7803 22.8 3.58353 22.8 4.42105C22.8 5.25858 22.4839 6.0618 21.9213 6.65402C21.3587 7.24624 20.5956 7.57895 19.8 7.57895C19.0043 7.57895 18.2413 7.24624 17.6787 6.65402C17.1161 6.0618 16.8 5.25858 16.8 4.42105C16.8 3.58353 17.1161 2.7803 17.6787 2.18808C18.2413 1.59586 19.0043 1.26316 19.8 1.26316ZM19.8 3.15789C19.4817 3.15789 19.1765 3.29098 18.9515 3.52787C18.7264 3.76475 18.6 4.08604 18.6 4.42105C18.6 4.75606 18.7264 5.07735 18.9515 5.31424C19.1765 5.55113 19.4817 5.68421 19.8 5.68421C20.1183 5.68421 20.4235 5.55113 20.6485 5.31424C20.8736 5.07735 21 4.75606 21 4.42105C21 4.08604 20.8736 3.76475 20.6485 3.52787C20.4235 3.29098 20.1183 3.15789 19.8 3.15789ZM4.2 1.26316C4.99565 1.26316 5.75871 1.59586 6.32132 2.18808C6.88393 2.7803 7.2 3.58353 7.2 4.42105C7.2 5.25858 6.88393 6.0618 6.32132 6.65402C5.75871 7.24624 4.99565 7.57895 4.2 7.57895C3.40435 7.57895 2.64129 7.24624 2.07868 6.65402C1.51607 6.0618 1.2 5.25858 1.2 4.42105C1.2 3.58353 1.51607 2.7803 2.07868 2.18808C2.64129 1.59586 3.40435 1.26316 4.2 1.26316ZM4.2 3.15789C3.88174 3.15789 3.57652 3.29098 3.35147 3.52787C3.12643 3.76475 3 4.08604 3 4.42105C3 4.75606 3.12643 5.07735 3.35147 5.31424C3.57652 5.55113 3.88174 5.68421 4.2 5.68421C4.51826 5.68421 4.82348 5.55113 5.04853 5.31424C5.27357 5.07735 5.4 4.75606 5.4 4.42105C5.4 4.08604 5.27357 3.76475 5.04853 3.52787C4.82348 3.29098 4.51826 3.15789 4.2 3.15789ZM0.9 17.6842C0.661305 17.6842 0.432386 17.784 0.263604 17.9617C0.094821 18.1394 0 18.3803 0 18.6316V19.2632C0 20.5194 0.474106 21.7243 1.31802 22.6126C2.16193 23.5009 3.30653 24 4.5 24H19.5C20.6935 24 21.8381 23.5009 22.682 22.6126C23.5259 21.7243 24 20.5194 24 19.2632V18.6316C24 18.3803 23.9052 18.1394 23.7364 17.9617C23.5676 17.784 23.3387 17.6842 23.1 17.6842H0.9ZM4.5 22.1053C3.83588 22.1052 3.19505 21.8476 2.70005 21.3815C2.20505 20.9154 1.89059 20.2737 1.8168 19.5789H22.1832C22.1094 20.2737 21.795 20.9154 21.2999 21.3815C20.8049 21.8476 20.1641 22.1052 19.5 22.1053H4.5Z"
                                fill={'currentColor'}
                            />
                        </svg>
                    </i>
                    <span className={`${pathname === '/superadmin/organisations' ? 'text-mobiPink' : ''} pt-1 text-sm font-[500]`}>Sub Admins</span>
                </Link>
                <Link href={'/superadmin/subscriptions'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/superadmin/subscriptions' ? 'bg-kuduOrangeFade' : 'hover:bg-kuduLightGray  text-mobiRomanSilver'} transition`}>
                    <i className="mr-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M14.5 19L16.5 21L21 16.5"
                                stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </i>
                    <span className={`${pathname === '/superadmin/subscriptions' ? 'text-mobiPink' : ''} text-sm font-[500]`}>Products</span>
                </Link>
                <Link href={'/superadmin/id-cards'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/superadmin/id-cards' ? 'bg-kuduOrangeFade' : 'hover:bg-kuduLightGray  text-mobiRomanSilver'} transition`}>
                    <i className="mr-3">
                        <svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.25695 9.99971C10.6382 9.99971 11.657 8.98091 11.657 7.59971C11.657 6.21851 10.6382 5.19971 9.25695 5.19971C7.87575 5.19971 6.85695 6.21851 6.85695 7.59971C6.85695 8.98091 7.87455 9.99971 9.25695 9.99971Z"
                                fill={`${pathname === '/superadmin/id-cards' ? 'rgba(163, 36, 242, 1)' : 'currentColor'}`} />
                            <path d="M21.6 0.399902H2.4C1.0764 0.399902 0 1.4091 0 2.6499V17.3499C0 18.5907 1.0764 19.5999 2.4 19.5999H21.6C22.9236 19.5999 24 18.5907 24 17.3499V2.6499C24 1.4091 22.9236 0.399902 21.6 0.399902ZM21.6 17.1999L2.4 17.1867V2.7999L21.6 2.8131V17.1999Z"
                                fill={`${pathname === '/superadmin/id-cards' ? 'rgba(163, 36, 242, 1)' : 'currentColor'}`} />
                            <path d="M14.4014 6.39941H19.2014V8.79941H14.4014V6.39941ZM15.6014 11.1994H19.2014V13.5994H15.6014V11.1994ZM13.7174 14.2426C13.7174 12.5938 11.7062 10.8994 9.25941 10.8994C6.81261 10.8994 4.80141 12.5938 4.80141 14.2426V14.7994H13.7174V14.2426Z"
                                fill={`${pathname === '/superadmin/id-cards' ? 'rgba(163, 36, 242, 1)' : 'currentColor'}`} />
                        </svg>
                    </i>
                    <span className={`${pathname === '/superadmin/id-cards' ? 'text-mobiPink' : ''} text-sm font-[500]`}>Orders</span>
                </Link>
                <Link href={'/superadmin/events'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/superadmin/events' ? 'bg-kuduOrangeFade' : 'hover:bg-kuduLightGray  text-mobiRomanSilver'} transition`}>
                    <i className="mr-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 10H2M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z"
                                stroke={`${pathname === '/superadmin/events' ? 'rgba(163, 36, 242, 1)' : 'currentColor'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </i>
                    <span className={`${pathname === '/superadmin/events' ? 'text-mobiPink' : ''} text-sm font-[500]`}>Services</span>
                </Link>
                <a href="#" className={`flex items-center py-2 px-4 h-[57px] rounded-lg hover:bg-kuduLightGray  text-mobiRomanSilver transition`}>
                    <i className="mr-3">
                        <svg width="20" height="15" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7 18H2.3C1.69 18 1.10499 17.7893 0.673654 17.4142C0.242321 17.0391 0 16.5304 0 16V2C0 1.46957 0.242321 0.960859 0.673654 0.585786C1.10499 0.210714 1.69 0 2.3 0H20.7C21.31 0 21.895 0.210714 22.3263 0.585786C22.7577 0.960859 23 1.46957 23 2V16C23 16.5304 22.7577 17.0391 22.3263 17.4142C21.895 17.7893 21.31 18 20.7 18ZM2.3 4V16H20.7V4H2.3ZM10.35 13.121L6.08695 9.414L7.71305 8L10.35 10.293L15.287 6L16.913 7.414L10.35 13.121Z" fill="currentColor" />
                        </svg>
                    </i>
                    Transactions
                </a>
                <Link href={'#'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/notification' ? 'bg-kuduOrangeFade' : 'hover:bg-kuduLightGray  text-mobiRomanSilver'} transition`}>
                    <i className="mr-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 21H10M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                                stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </i>
                    <span className={`${pathname === '/notification' ? 'text-mobiPink' : ''} text-sm font-[500]`}>Notification</span>
                </Link>

                <div className='w-full h-[1px] px-4 border-mobiSilverDivider border-bottom border'></div>
            </nav>

            {/* Footer */}
            <div className="px-4 py-6">
                <Link href={'/app/settings'} className={`flex items-center py-2 px-4 h-[57px] rounded-lg ${pathname === '/app/settings' ? 'bg-kuduOrangeFade' : 'hover:bg-kuduLightGray '} transition`}>
                    <i className={`fas fa-cog mr-3 ${pathname === '/app/settings' ? 'text-mobiPink' : ''}`}></i>
                    <span className={`${pathname === '/app/settings' ? 'text-mobiPink' : ''} text-sm font-[500]`}>Settings</span>
                </Link>
                <a href="#" className={`flex items-center py-2 px-4 h-[57px] rounded-lg text-red-500 hover:bg-kuduLightGray  transition`}>
                    <i className="fas fa-sign-out-alt mr-3"></i>
                   <span className="text-sm font-[500]">Logout</span>
                </a>
            </div>
        </div>
    );
}
