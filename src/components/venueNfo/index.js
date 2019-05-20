import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calender from '../../resources/images/icons/calendar.png';
// import icon_location from '../../resources/images/icons/location.png';

const VunueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calender})`
                    }}
                  />
                  <div className="vn_title">Taste Thursdays</div>
                  <div className="vn_desc">Every Thursday @10.00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calender})`
                    }}
                  />
                  <div className="vn_title">Friday Night Mixer</div>
                  <div className="vn_desc">Every Friday @10.00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={1000}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calender})`
                    }}
                  />
                  <div className="vn_title">Privacy Saturdays</div>
                  <div className="vn_desc">Every Saturday @10.00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VunueNfo;
