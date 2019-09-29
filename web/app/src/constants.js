const prod = {
  enableSW: true,
  enableTrackPanel: true,
  ga: '',
};

const dev = {
  enableSW:false,
  enableTrackPanel: false,
  ga: ''
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export const ENABLE_TRACK_PANEL = config.enableTrackPanel;
export const GA_TRACK_ID = config.ga;
export const ENABLE_SW = config.enableSW;
