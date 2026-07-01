import React, { useEffect, useRef } from 'react';

export function KakaoMap() {
  const containerId = "daumRoughmapContainer1782874139115";
  const isInitialized = useRef(false);

  useEffect(() => {
    const existingScript = document.getElementById('daum-roughmap-script');
    
    const initializeMap = () => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = '';
      }
      
      const win = window as any;
      if (win.daum && win.daum.roughmap && win.daum.roughmap.Lander) {
        try {
          new win.daum.roughmap.Lander({
            "timestamp": "1782874139115",
            "key": "qgeykg6drxf",
            "mapWidth": "100%",
            "mapHeight": "240" // Responsive height
          }).render();
          isInitialized.current = true;
        } catch (e) {
          console.error("Failed to render Kakao Roughmap", e);
        }
      }
    };

    const win = window as any;
    if (win.daum && win.daum.roughmap && win.daum.roughmap.Lander) {
      initializeMap();
    } else {
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'daum-roughmap-script';
        script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
        script.charset = 'UTF-8';
        script.className = 'daum_roughmap_loader_script';
        script.async = true;
        
        script.onload = () => {
          const checkExist = setInterval(() => {
            if (win.daum && win.daum.roughmap && win.daum.roughmap.Lander) {
              clearInterval(checkExist);
              initializeMap();
            }
          }, 100);
        };
        
        document.body.appendChild(script);
      } else {
        const checkExist = setInterval(() => {
          if (win.daum && win.daum.roughmap && win.daum.roughmap.Lander) {
            clearInterval(checkExist);
            initializeMap();
          }
        }, 100);
      }
    }

    return () => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full relative border border-slate-200 rounded-lg overflow-hidden bg-slate-100 shadow-2xs h-60">
      <div 
        id={containerId} 
        className="root_daum_roughmap root_daum_roughmap_landing w-full h-full"
        style={{ width: '100%', height: '100%' }}
      ></div>
    </div>
  );
}
