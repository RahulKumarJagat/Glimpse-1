import React from 'react';

// Button Components
const VideoButton: React.FC<{ enabled: boolean; onToggle: () => void }> = ({ enabled, onToggle }) => (
    <button
        onClick={onToggle}
        className={`m-2 p-3 rounded-full border-none cursor-pointer w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md ${enabled ? 'bg-green-500' : 'bg-red-500'} text-white`}
        title={enabled ? 'Turn Off Camera' : 'Turn On Camera'}
        aria-label={enabled ? 'Turn Off Camera' : 'Turn On Camera'}
    >
        {enabled ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z" />
            </svg>
        )}
    </button>
);

const AudioButton: React.FC<{ enabled: boolean; onToggle: () => void }> = ({ enabled, onToggle }) => (
    <button
        onClick={onToggle}
        className={`m-2 p-3 rounded-full border-none cursor-pointer w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md ${enabled ? 'bg-green-500' : 'bg-red-500'} text-white`}
        title={enabled ? 'Mute Audio' : 'Unmute Audio'}
        aria-label={enabled ? 'Mute Audio' : 'Unmute Audio'}
    >
        {enabled ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
            </svg>
        )}
    </button>
);

const ScreenShareButton: React.FC<{ isSharing: boolean; onToggle: () => void }> = ({ isSharing, onToggle }) => (
    <button
        onClick={onToggle}
        className={`m-2 p-3 rounded-full border-none cursor-pointer w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md ${isSharing ? 'bg-red-500' : 'bg-blue-500'} text-white`}
        title={isSharing ? 'Stop Sharing' : 'Share Screen'}
        aria-label={isSharing ? 'Stop Sharing' : 'Share Screen'}
    >
        {isSharing ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10zm-5-3v2h1v-2h2v-1h-2v-2h-1v2h-2v1h2z" />
            </svg>
        )}
    </button>
);

const RecordingButton: React.FC<{ isRecording: boolean; onToggle: () => void }> = ({ isRecording, onToggle }) => (
    <button
        onClick={onToggle}
        className={`m-2 p-3 rounded-full border-none cursor-pointer w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md ${isRecording ? 'bg-red-500' : 'bg-purple-500'} text-white`}
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        aria-label={isRecording ? 'Stop Recording' : 'Start Recording'}
    >
        {isRecording ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h12v12H6z" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
        )}
    </button>
);

const EndCallButton: React.FC<{ onEndCall: () => void }> = ({ onEndCall }) => (
    <button
        onClick={onEndCall}
        className="m-2 p-3 rounded-full border-none cursor-pointer w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md bg-red-500 text-white"
        title="End Call"
        aria-label="End Call"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 01-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
        </svg>
    </button>
);

// Main interface
interface ControlsProps {
    isVideoEnabled: boolean;
    isAudioEnabled: boolean;
    onToggleVideo: () => void;
    onToggleAudio: () => void;
    onEndCall?: () => void;
    onShareScreen?: () => void;
    isScreenSharing?: boolean;
    isRecording?: boolean;
    onToggleRecording?: () => void;
}

// Main component
const Controls: React.FC<ControlsProps> = ({
    isVideoEnabled,
    isAudioEnabled,
    onToggleVideo,
    onToggleAudio,
    onEndCall,
    onShareScreen,
    isScreenSharing = false,
    isRecording = false,
    onToggleRecording
}) => {
    return (
        <div className="flex justify-center p-4 bg-black/10 rounded-xl gap-2">
            <VideoButton enabled={isVideoEnabled} onToggle={onToggleVideo} />
            <AudioButton enabled={isAudioEnabled} onToggle={onToggleAudio} />

            {onShareScreen && (
                <ScreenShareButton isSharing={isScreenSharing} onToggle={onShareScreen} />
            )}

            {onToggleRecording && (
                <RecordingButton isRecording={isRecording} onToggle={onToggleRecording} />
            )}

            {onEndCall && (
                <EndCallButton onEndCall={onEndCall} />
            )}
        </div>
    );
}

export default Controls;
