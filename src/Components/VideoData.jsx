import { useState } from "react";
import "./styles.css";
import axios from "axios";

function HandleVideoInfo({ videoOpt }) {
    const [itemsCount, setItemsCount] = useState(4);
    const [btnTitle, setBtnTitle] = useState("Load more video options");
    const handleDownload = async (formatId, fileUrl, fileExtension) => {
        try {
          const response = await axios.get(`http://localhost:5000/download`, {
            params: {
                formatId: formatId,
                url: fileUrl,
            },
            responseType: "blob" // Important for handling binary data
        });


          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `video.${fileExtension}`); // You can adjust the filename if needed
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error("Download Error:", error);
        }
    };
    return (
      <div className="w-full flex flex-col items-center">
        <table className="w-full text-center">
          <thead>
            <tr className="h-14 bg-gray-700">
              <th>Quality</th>
              <th>Size</th>
              <th>Format</th>
              <th className="rounded-tr-lg"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {videoOpt
              .map((videoOption, index) => {
                return (
                  <tr
                    className={` border-b-gray-300 border-b hover:bg-gray-300 ${
                      index === videoOpt.length - 1 ? "rounded-b-lg " : ""
                    }   ${index % 2 !== 0 ? "bg-white " : "bg-gray-200"}   `}
                    key={index}
                  >
                    <td
                      className={`p-3   ${
                        index === videoOpt.length - 1 ? "rounded-bl-lg" : ""
                      }`}
                    >
                      {videoOption.videoQuality}
                    </td>
                    <td className=" p-3"> {videoOption.fileSize} </td>
                    <td className=" p-3">
                      <h2>{videoOption.fileExtension} </h2>
                    </td>
                    <td
                      className={`p-3   ${
                        index === videoOpt.length - 1 ? "rounded-br-lg" : ""
                      }`}
                    >
                      <button
                        onClick={() =>
                            handleDownload(
                            videoOption.formatId,
                            videoOption.videoUrl,
                            videoOption.fileExtension
                          )
                        }
                        className="h-8 bg-orange-600 text-white w-full rounded-[6px] flex items-center justify-center"
                      >
                        <img
                          src="./images/326639_download_file_icon.svg"
                          alt="download"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })
              .slice(0, itemsCount)}
          </tbody>
        </table>
        <button
          className="bg-gray-700 hover:bg-gray-800 rounded-[10px] w-9/12 p-2 font-bold text-2xl text-gray-100 m-2 flex justify-center items-center"
          onClick={() => {
            itemsCount === 4 ? setItemsCount(videoOpt.length) : setItemsCount(4);
            itemsCount === 4
              ? setBtnTitle("Show less options")
              : setBtnTitle("Load more video options");
          }}
        >
          {btnTitle}
        </button>
      </div>
    );
  }

export default HandleVideoInfo;