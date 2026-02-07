import Link from "next/link";
import type { UserProfile } from "@/types";
import {
  profileSection,
  avatar,
  avatarIcon,
  avatarImage,
  info,
  nickname,
  gradeBadge,
  editLink,
  chevronIcon,
} from "./DashboardProfile.css";

interface Props {
  user: UserProfile;
}

export default function DashboardProfile({ user }: Props) {
  return (
    <section className={profileSection}>
      <div className={avatar}>
        {user.profileImageUrl ? (
          <img
            className={avatarImage}
            src={user.profileImageUrl}
            alt={`${user.nickname} 프로필`}
          />
        ) : (
          <svg
            className={avatarIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        )}
      </div>

      <div className={info}>
        <div className={nickname}>{user.nickname}</div>
        <span className={gradeBadge}>{user.grade}</span>
      </div>

      <Link href="/my/profile" className={editLink} aria-label="프로필 수정">
        프로필 수정
        <svg
          className={chevronIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </Link>
    </section>
  );
}
