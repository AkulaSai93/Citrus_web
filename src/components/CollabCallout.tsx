import { AvatarOne, AvatarTwo, AvatarThree } from "./Avatars";

const avatars = [AvatarOne, AvatarTwo, AvatarThree];

function InlineFaces() {
  return (
    <span
      aria-hidden="true"
      className="mx-1.5 inline-flex translate-y-1.5 items-center align-middle"
    >
      {avatars.map((Avatar, i) => (
        <Avatar
          key={i}
          className={`relative h-9 w-9 rounded-full border-[3px] border-white shadow-sm sm:h-11 sm:w-11 ${
            i > 0 ? "-ml-3" : ""
          }`}
        />
      ))}
    </span>
  );
}

export default function CollabCallout() {
  return (
    <div className="relative mx-auto max-w-4xl text-center">
      <p className="text-balance text-2xl font-bold leading-[1.45] tracking-tight text-ink sm:text-3xl lg:text-[2.25rem]">
        Spin up{" "}
        <span className="mx-0.5 inline-block translate-y-0.5 rounded-full border-2 border-brand px-4 py-0.5 text-brand leading-none">
          Teams
        </span>
        , invite your people and collaborate <InlineFaces /> in one place
      </p>

      <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-ink-muted">
        Shared boards, live sprint updates and comments on every task — so the
        whole team stays on the same page without another status meeting.
      </p>
    </div>
  );
}
