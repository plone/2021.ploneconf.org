import React from 'react';

const loadTiTo = (callback) => {
  const existingScript = document.getElementById('TiTo');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://js.tito.io/v2';
    script.id = 'TiTo';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};

const TitoBlockView = () => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    loadTiTo(() => {
      setLoaded(true);
    });
  });

  return (
    <>
      {loaded ? <tito-widget event="plone/conference-2021"></tito-widget> : ''}
    </>
  );
};

export default TitoBlockView;