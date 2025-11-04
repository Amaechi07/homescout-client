"use client";

type ImageProp = {
  image: FileList | null;
  setImage: React.Dispatch<React.SetStateAction<FileList | null>>;
};

export default function ImageUpload({ setImage }: ImageProp) {
  return (
    <div className="border-2 border-dashed border-gray-400 rounded-md p-[50px] w-[100%] mx-auto text-center mt-[10px]">
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center justify-center"
      >
        <div className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mb-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-4 4m4-4l4 4M4 12V8a4 4 0 014-4h8a4 4 0 014 4v4"
            />
          </svg>
        </div>
        <p className="text-blue-600 font-semibold">
          {" "}
          Drop and Drag Images Here or Click to upload
        </p>

        <p className="text-gray-400 text-sm mt-1">PNG, JPG, JPEG</p>
      </label>
      <input
        required
        onChange={(e) => setImage(e.target.files)}
        id="file-upload"
        type="file"
        accept=".png, .jpg, .jpeg"
        className="hidden"
      />
    </div>
  );
}
