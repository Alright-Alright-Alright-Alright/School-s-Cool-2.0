import React from "react"
import PropTypes from "prop-types"

const icons = {
  add: '<circle cx="12" cy="12" r="10.7" stroke="var(--color-counter)" fill="var(--color-bg)"/><path d="M12 6V18" stroke="var(--color-content)" stroke-linecap="round"/><path d="M6 12H18" stroke="var(--color-content)" stroke-linecap="round"/>',
  collapse:
    '<path d="M3 13L13 3L23 13" stroke="currentColor" fill="transparent" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
  close:
    '<path d="M4 4L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M20 4L4 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  download:
    '<path d="M12 4L12 17" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"/><path d="M16 13L12 17L8 13" stroke="currentColor" fill="transparent" stroke-miterlimit="10" stroke-linecap="round"/><path d="M19 17V20H5V17" stroke="currentColor" fill="transparent" stroke-miterlimit="10" stroke-linecap="round"/>',
  expand:
    '<path d="M3 3L13 13L23 3" stroke="currentColor" fill="transparent" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
  file: '<path d="M11.5 8V8.5H12H16.5V20.5H3.5V3.5H11.5V8ZM12.5 7.5V4.20711L15.7929 7.5H12.5Z" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/>',
  follow:
    '<circle cx="12" cy="12" r="10.7" stroke="var(--color-counter)" fill="var(--color-bg)" /><path d="M6 12L10.5 17L17.5 8.5" stroke="var(--color-content)" fill="var(--color-bg)" stroke-linecap="round"/>',
  info: '<circle cx="12" cy="12" r="7.5" stroke="currentColor" fill="transparent"/><path d="M11.1615 14.8293V14.1597C11.1615 13.751 11.2037 13.415 11.2882 13.1519C11.3776 12.8841 11.5292 12.6515 11.7429 12.4542C11.9565 12.2569 12.2522 12.0572 12.6298 11.8551C12.9727 11.6766 13.2484 11.5121 13.4571 11.3618C13.6708 11.2067 13.8248 11.0352 13.9193 10.8473C14.0186 10.6594 14.0683 10.4291 14.0683 10.1566C14.0683 9.75724 13.8944 9.42365 13.5466 9.15583C13.1988 8.88332 12.7217 8.74706 12.1155 8.74706C11.4596 8.74706 10.9578 8.86453 10.6099 9.09945C10.2671 9.32968 10.0435 9.66092 9.93913 10.0932H9C9.07453 9.47768 9.37019 8.97494 9.88696 8.58496C10.4087 8.19499 11.1491 8 12.1081 8C12.7093 8 13.2261 8.10102 13.6584 8.30305C14.0907 8.50509 14.4211 8.77291 14.6497 9.1065C14.8832 9.4354 15 9.79718 15 10.1919C15 10.6711 14.8708 11.0728 14.6124 11.397C14.354 11.7165 13.9317 12.029 13.3453 12.3344C13.0075 12.5176 12.7391 12.6868 12.5404 12.8418C12.3466 12.9922 12.2075 13.1707 12.123 13.3774C12.0435 13.5795 12.0037 13.8496 12.0037 14.1879V14.8293H11.1615ZM11.5938 17C11.4 17 11.236 16.9389 11.1019 16.8168C10.9727 16.6899 10.9081 16.5419 10.9081 16.3727C10.9081 16.1989 10.9727 16.0462 11.1019 15.9146C11.2311 15.7831 11.3925 15.7173 11.5863 15.7173C11.7801 15.7173 11.9491 15.7831 12.0932 15.9146C12.2373 16.0415 12.3093 16.1919 12.3093 16.3657C12.3093 16.5348 12.2373 16.6828 12.0932 16.8097C11.9491 16.9366 11.7826 17 11.5938 17Z" fill="currentColor"/>',
  like: '<path d="M9.41132 3.82695L9.85657 4.66368L10.2958 3.82377C10.8996 2.66923 12.1325 1.1 14.2854 1.1H14.3165C16.6592 1.12083 18.6767 3.13155 18.7987 5.74312L18.7987 5.74358C18.8742 7.32755 18.2892 8.67026 17.1427 10.0761C15.9891 11.4906 14.3067 12.9224 12.2293 14.6904L12.1884 14.7253L12.1884 14.7253L12.1861 14.7272C11.9326 14.9456 11.6703 15.1697 11.4018 15.3993C10.9137 15.8164 10.4047 16.2513 9.88923 16.7024L9.88846 16.703L9.85276 16.7344L9.81705 16.703L9.81706 16.703L9.81371 16.7001C9.35413 16.3035 8.90692 15.9195 8.47469 15.5484C8.14729 15.2672 7.82848 14.9935 7.51942 14.7272L7.51714 14.7253L7.47561 14.6899C5.39847 12.9222 3.7162 11.4904 2.56268 10.0761C1.41606 8.67024 0.831071 7.32754 0.906518 5.74358L0.90654 5.74311C1.02853 3.13017 3.0365 1.12086 5.37791 1.1H5.42001C7.5719 1.1 8.79426 2.66734 9.41132 3.82695Z" stroke="var(--color-counter)" fill="var(--color-bg)" stroke-miterlimit="10"/>',
  link: '<path d="M19.5 12C19.5 16.7514 16.0884 20.5 12 20.5C7.9116 20.5 4.5 16.7514 4.5 12C4.5 7.24859 7.9116 3.5 12 3.5C16.0884 3.5 19.5 7.24859 19.5 12Z" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/><path d="M15.5 12C15.5 14.4321 15.0609 16.6099 14.3715 18.1609C14.0266 18.937 13.6288 19.5342 13.2123 19.9305C12.7984 20.3244 12.3896 20.5 12 20.5C11.6104 20.5 11.2016 20.3244 10.7877 19.9305C10.3712 19.5342 9.97343 18.937 9.62848 18.1609C8.93913 16.6099 8.5 14.4321 8.5 12C8.5 9.56793 8.93913 7.39015 9.62848 5.83911C9.97343 5.06296 10.3712 4.46581 10.7877 4.06946C11.2016 3.67557 11.6104 3.5 12 3.5C12.3896 3.5 12.7984 3.67557 13.2123 4.06946C13.6288 4.46581 14.0266 5.06296 14.3715 5.83911C15.0609 7.39015 15.5 9.56793 15.5 12Z" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/><path d="M4 12H20" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/><path d="M6 7L18 7" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/><path d="M6 17L18 17" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/><path d="M12 4V21" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/>',
  member:
    '<path d="M14.7 6.4C14.7 7.89117 13.4912 9.1 12 9.1C10.5089 9.1 9.30005 7.89117 9.30005 6.4C9.30005 4.90883 10.5089 3.7 12 3.7C13.4912 3.7 14.7 4.90883 14.7 6.4Z" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/><path d="M4.5 19C4.5 14.8578 7.85786 11.5 12 11.5C16.1421 11.5 19.5 14.8578 19.5 19V20.5H4.5V19Z" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/>',
  message:
    '<path d="M11.2802 13.2799L11.1411 13.007H10.8348H5.40002C2.91474 13.007 0.900024 10.9923 0.900024 8.50698V5C0.900024 2.51471 2.91474 0.5 5.40002 0.5H14.6C17.0853 0.5 19.1 2.51472 19.1 5V13.007H15.0087H14.7024L14.5633 13.2799L12.9218 16.4993L11.2802 13.2799Z" stroke="currentColor" fill="transparent" stroke-miterlimit="10"/>',
  search:
    '<circle cx="11.36" cy="11.36" r="8.20999" stroke="currentColor" fill="transparent" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M16.8 18L20.4001 21.6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
  seemore:
    '<ellipse cx="2.5" cy="14.5" rx="1.49999" ry="1.5" transform="rotate(-90 2.5 14.5)" fill="currentColor"/><ellipse cx="2.5" cy="8.49997" rx="1.5" ry="1.5" transform="rotate(-90 2.5 8.49997)" fill="currentColor"/><ellipse cx="2.5" cy="2.49999" rx="1.49999" ry="1.5" transform="rotate(-90 2.5 2.49999)" fill="currentColor"/>',
  select:
    '<path d="M1 4.5L5.5 9.5L12.5 1" stroke="currentColor" fill="transparent" stroke-linecap="round"/>',
  jpg: '<path d="M8.5 5V5.5H9H13.5V17.5H0.5V0.5H8.5V5ZM9.5 4.5V1.20711L12.7929 4.5H9.5Z" stroke="#0F2331" stroke-miterlimit="10"/>',
  pdf: '<path d="M13.5 17.5H0.5V0.5H8.79289L13.5 5.20711V17.5Z" stroke="#0F2331" stroke-miterlimit="10"/>',
}

export default function Icon({ iconName, iconStyle, viewbox }) {
  return (
    <>
      <svg
        aria-hidden="true"
        className={`h-6 w-6 fill-current stroke-current ${iconStyle}`}
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: icons[iconName] }}
        viewBox={viewbox}
        xmlns="http://www.w3.org/2000/svg"
      />
    </>
  )
}

Icon.defaultProps = {
  iconStyle: "text-grey-dark",
  viewbox: "0 0 24 24",
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconStyle: PropTypes.string,
  viewbox: PropTypes.string,
}
