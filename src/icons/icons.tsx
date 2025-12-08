const leftArrow = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <line
      x1="19.5"
      y1="12"
      x2="4.5"
      y2="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="10.5"
      y1="19.5"
      x2="3"
      y2="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="10.5"
      y1="4.5"
      x2="3"
      y2="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const rightArrow = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <line
      x1="4.5"
      y1="12"
      x2="19.5"
      y2="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="13.5"
      y1="4.5"
      x2="21"
      y2="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="13.5"
      y1="19.5"
      x2="21"
      y2="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const hamburger = ({
  active,
  handleClick,
}: {
  active: boolean;
  handleClick: () => void;
}) => (
  <div
    className={"hamburger" + (active ? " active" : "")}
    onClick={handleClick}
  >
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </div>
);

const warning = (size?: "large" | "small", error?: boolean) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={error ? "var(--danger)" : "var(--warning)"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="var(--icon-fill)"
    className={"icon warning-icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 16.75h.007v.008H12v-.008z"
    />
  </svg>
);

const linkIcon = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className={"icon link-icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);
const arrowUpRight = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <line x1="14" y1="10" x2="20" y2="4" strokeLinecap="round" />
    <line x1="20" y1="4" x2="16" y2="4" strokeLinecap="round" />
    <line x1="20" y1="4" x2="20" y2="8" strokeLinecap="round" />
    <path
      d="M12 6 L 6 6 L 6 18 L 18 18 L 18 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sectionSeparator = () => (
  <div className="section-separator">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      className="section-separator-svg"
    >
      <path
        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
        stroke="var(--bg)"
        fill="var(--bg)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const clock = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const closeIcon = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const webDev = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3h16.5M3.75 3a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0019.5 3M3.75 3v13.5m16.5-13.5v13.5m-16.5 0A2.25 2.25 0 001.5 18.75v-13.5A2.25 2.25 0 003.75 3m16.5 0A2.25 2.25 0 0122.5 5.25v13.5a2.25 2.25 0 01-2.25 2.25M8.25 9h.008v.008H8.25V9zm0 3h.008v.008H8.25V12zm0 3h.008v.008H8.25v-.008zm3-6h.008v.008H11.25V9zm0 3h.008v.008H11.25V12zm0 3h.008v.008H11.25v-.008zm3-6h.008v.008H14.25V9zm0 3h.008v.008H14.25V12zm0 3h.008v.008H14.25v-.008z"
    />
  </svg>
);

const uI = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m-16.5 0A2.25 2.25 0 002.25 5.25v1.5m16.5-3v11.25A2.25 2.25 0 0118 16.5h-2.25m2.25-13.5h1.5m-1.5 0H6m0 0v11.25A2.25 2.25 0 008.25 16.5h2.25m7.5-13.5H21m-4.5 0v11.25A2.25 2.25 0 0114.25 16.5h-2.25m0 0h-2.25m4.5 0h2.25"
    />
  </svg>
);

const sEO = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const phone = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.516 1.772a11.037 11.037 0 01-5.423-5.423l1.772-1.516c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const email = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5L2.25 6.75"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.375 8.25l7.125 5.25a2.25 2.25 0 002.25 0l7.125-5.25"
    />
  </svg>
);

const gitHub = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="98"
    height="96"
    className={"icon " + (size ? size : "")}
    viewBox="0 0 97 96"
  >
    <path
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill="currentColor"
    />
  </svg>
);

const linkedIn = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 8a6 6 0 016 6v7h-4.5v-7a1.5 1.5 0 00-3 0v7H10v-7a6 6 0 016-6zM2 9h4v12H2z"
    />
    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const verdantLogo = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="128"
    viewBox="0 0 128 128"
    className={"icon " + (size ? size : "")}
  >
    <path
      d="M 87.500 7.361 C 83.841 11.124, 78.746 14.488, 68.500 19.907 C 51.230 29.042, 44.833 33.318, 38.843 39.730 C 30.249 48.930, 26.339 60.232, 27.333 73 C 27.983 81.363, 29.963 87.695, 35.604 99.460 C 39.452 107.485, 40.110 112.136, 38.860 122.473 C 38.589 124.709, 38.945 125.534, 40.298 125.805 C 43.302 126.407, 44.889 124.101, 45.562 118.160 L 46.203 112.500 73.690 112.500 L 101.178 112.500 103.089 110.139 C 104.831 107.987, 105 105.971, 105 87.323 C 105 67.355, 104.515 63.712, 101.600 61.765 C 100.995 61.361, 97.378 61.024, 93.563 61.015 L 86.626 61 89.256 58.250 C 95.545 51.676, 99.702 35.958, 98.436 23.541 C 97.733 16.643, 94.101 1.945, 93.140 2.109 C 92.788 2.169, 90.250 4.532, 87.500 7.361 M 80.682 27.363 C 79.830 28.663, 74.716 33.233, 69.317 37.519 C 63.918 41.806, 57.413 47.314, 54.861 49.759 L 50.222 54.206 50.741 49.603 C 51.461 43.218, 49.501 43.681, 48 50.250 C 47.341 53.138, 44.767 59.920, 42.280 65.322 C 37.384 75.957, 35.904 84.449, 37.804 91 C 38.798 94.426, 38.822 94.382, 38.910 88.932 C 39.103 77.015, 44.898 64.984, 54.848 55.843 C 59.717 51.370, 62.273 49.942, 70.550 47.073 C 80.965 43.461, 82.121 41.862, 72.498 44.374 L 66.820 45.857 72.773 39.658 C 76.046 36.249, 79.696 31.556, 80.883 29.230 C 83.240 24.609, 83.134 23.621, 80.682 27.363 M 95.446 66.087 C 94.416 67.755, 96.733 69.667, 98.113 68.287 C 99.267 67.133, 98.545 65, 97 65 C 96.515 65, 95.816 65.489, 95.446 66.087 M 47.017 73.983 C 45.181 75.819, 45 77.293, 45 90.418 C 45 98.348, 45.273 105.548, 45.607 106.418 C 46.140 107.806, 49.509 108, 73.130 108 L 100.046 108 99.773 90.250 L 99.500 72.500 74.267 72.233 C 50.107 71.977, 48.948 72.052, 47.017 73.983 M 71.524 88.394 C 66.887 98.384, 66.064 101.479, 68.236 100.755 C 70.312 100.063, 78.382 80.982, 77.128 79.728 C 76.354 78.954, 74.765 81.411, 71.524 88.394 M 56.750 85.515 C 53.587 87.998, 51 90.231, 51 90.477 C 51 91.018, 62.656 99, 63.445 99 C 65.372 99, 63.379 95.690, 60.021 93.315 C 57.833 91.767, 56.043 90.275, 56.043 90 C 56.043 89.725, 57.833 88.233, 60.021 86.685 C 62.210 85.137, 64 83.224, 64 82.435 C 64 80.207, 62.935 80.660, 56.750 85.515 M 81.639 81.694 C 80.443 82.890, 80.997 83.613, 85.590 86.851 L 90.181 90.086 85.840 93.186 C 83.453 94.890, 81.305 96.453, 81.067 96.659 C 80.828 96.865, 81.122 97.522, 81.720 98.120 C 82.502 98.902, 84.375 98.047, 88.403 95.072 C 91.481 92.798, 94 90.543, 94 90.062 C 94 89.581, 91.862 87.660, 89.250 85.792 C 82.828 81.201, 82.376 80.958, 81.639 81.694"
      stroke="none"
      fill="currentColor"
    />
  </svg>
);

const gridIcon = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <rect x="3" y="3" width="7" height="7" strokeLinecap="round" />
    <rect x="14" y="3" width="7" height="7" strokeLinecap="round" />
    <rect x="3" y="14" width="7" height="7" strokeLinecap="round" />
    <rect x="14" y="14" width="7" height="7" strokeLinecap="round" />
  </svg>
);

const listIcon = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
    <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
    <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
  </svg>
);

const searchIcon = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <circle cx="11" cy="11" r="8" strokeLinecap="round" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
  </svg>
);

const chevronUp = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 15l-7.5-7.5L4.5 15"
    />
  </svg>
);
const chevronRight = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
const chevronLeft = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5l-7.5-7.5 7.5-7.5"
    />
  </svg>
);
const chevronDown = (size?: "large" | "small") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"icon hoverable " + (size ? size : "")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 8.25l7.5 7.5 7.5-7.5"
    />
  </svg>
);

export {
  leftArrow,
  rightArrow,
  hamburger,
  warning,
  linkIcon,
  arrowUpRight,
  sectionSeparator,
  webDev,
  uI,
  sEO,
  clock,
  phone,
  email,
  gitHub,
  linkedIn,
  verdantLogo,
  gridIcon,
  listIcon,
  searchIcon,
  chevronUp,
  chevronRight,
  chevronLeft,
  chevronDown,
  closeIcon,
};
