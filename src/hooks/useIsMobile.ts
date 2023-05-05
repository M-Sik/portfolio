import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useIsMobile() {
  const [isMobile, setisMobile] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width: 1023px)' });
  useEffect(() => {
    setisMobile(mobile);
  }, [mobile]);
  return isMobile;
}
