export function TrackPlayer({ src, label }: { src: string; label?: string }) {
  return (
    <div>
      {label ? (
        <p className="text-sm font-semibold" dir="ltr">
          {label}
        </p>
      ) : null}
      <audio className="mt-1 h-10 w-full" controls preload="none" src={src} />
    </div>
  );
}
