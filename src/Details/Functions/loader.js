export function loaderImage(setLoader) {
  const timer = setTimeout(() => {
    setLoader(false);
  }, 6000);
  return () => clearTimeout(timer);
}
