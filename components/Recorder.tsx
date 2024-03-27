"use client";

import Image from "next/image";
import activeAssistantIcon from "@/public/Img/active.gif";
import notactiveAssistantIcon from "@/public/Img/notactive.png";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

export const mimeType = "audio/webm";

export default function Recorder({
  uploadAudio,
}: {
  uploadAudio: (blob: Blob) => void;
}) {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const { pending } = useFormStatus();
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (error) {
        console.log("error");
      }
    } else {
      alert("Your browser does not support the MediaRecorder API");
    }
  };

  const startRecording = async () => {
    if (stream === null || pending) return;
    setRecordingStatus("recording");

    //Recorder 대신
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
  };

  return (
    <div className="flex items-center justify-center text-white">
      {!permission && (
        <button onClick={getMicrophonePermission}>Get Microphone</button>
      )}

      <Image
        src={activeAssistantIcon}
        width={350}
        height={350}
        priority
        alt="Recording"
      ></Image>
    </div>
  );
}
