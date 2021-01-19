import * as React from 'react';

const SvgPinterest = ({
  fill = '#000',
  width = 'auto',
  height = '100%',
  viewBox = '0 0 32 32',
  style = {
    width: '32px',
    height: '32px',
  },
  ...props
}) => (
  <svg width={17} height={17} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 8.5a8.496 8.496 0 005.403 7.911c-.072-.67-.142-1.705.03-2.437.154-.663.998-4.223.998-4.223s-.253-.51-.253-1.26c0-1.18.686-2.065 1.537-2.065.724 0 1.076.544 1.076 1.195 0 .729-.463 1.82-.705 2.828-.203.847.422 1.536 1.257 1.536 1.51 0 2.67-1.594 2.67-3.893 0-2.034-1.463-3.456-3.548-3.456-2.418 0-3.836 1.812-3.836 3.69 0 .731.28 1.512.633 1.938.069.084.08.157.058.245-.065.268-.208.847-.238.965-.038.157-.123.188-.284.115-1.062-.494-1.724-2.046-1.724-3.29 0-2.683 1.946-5.143 5.614-5.143 2.947 0 5.239 2.1 5.239 4.908 0 2.928-1.847 5.288-4.411 5.288-.862 0-1.67-.448-1.947-.977 0 0-.426 1.621-.529 2.02-.191.739-.709 1.662-1.057 2.226.797.245 1.64.379 2.518.379C13.195 17 17 13.195 17 8.502A8.5 8.5 0 000 8.5z"
      fill={props.fill}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgPinterest;
