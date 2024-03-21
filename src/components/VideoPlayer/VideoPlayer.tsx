import { Cloudinary } from "@cloudinary/url-gen";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { scale } from "@cloudinary/url-gen/actions/resize";

const VideoPlayer = () => {
  const cloud_name = import.meta.env.REACT_APP_CLOUD_NAME;

  const cld = new Cloudinary({
    cloud: { cloudName: cloud_name },
  });

  return (
    <section className=" w-full">
      <video
        className="cursor-pointer w-full"
        controls
        controlsList="nodownload"
        disablePictureInPicture
        src={cld
          .video("ai_video.mp4")
          .resize(scale().width(1000))
          .delivery(quality("auto:best"))
          .delivery(format("auto"))
          .toURL()}
      ></video>
    </section>
  );
};

export default VideoPlayer;
