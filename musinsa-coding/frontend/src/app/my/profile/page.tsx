"use client";

import { useState } from "react";
import { mockUserProfile } from "@/data/mock/user";
import {
  profilePage,
  avatarSection,
  avatarWrapper,
  avatarCircle,
  avatarIconLarge,
  cameraButton,
  cameraIcon,
  formSection,
  fieldGroup,
  fieldLabel,
  fieldInput,
  fieldInputDisabled,
  genderRow,
  genderButton,
  genderButtonActive,
  submitButton,
} from "./page.css";

export default function ProfileEditPage() {
  const [nickname, setNickname] = useState(mockUserProfile.nickname);
  const [phone, setPhone] = useState(mockUserProfile.phone ?? "");
  const [gender, setGender] = useState(mockUserProfile.gender ?? "");
  const [birthDate, setBirthDate] = useState(mockUserProfile.birthDate ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    alert("프로필이 저장되었습니다");
  };

  return (
    <div className={profilePage}>
      <div className={avatarSection}>
        <div className={avatarWrapper}>
          <div className={avatarCircle}>
            <svg
              className={avatarIconLarge}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <button className={cameraButton} aria-label="프로필 사진 변경">
            <svg
              className={cameraIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </button>
        </div>
      </div>

      <form className={formSection} onSubmit={handleSubmit}>
        <div className={fieldGroup}>
          <label className={fieldLabel}>이메일</label>
          <input
            className={fieldInputDisabled}
            type="email"
            value={mockUserProfile.email}
            disabled
          />
        </div>

        <div className={fieldGroup}>
          <label className={fieldLabel}>닉네임</label>
          <input
            className={fieldInput}
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력해주세요"
            maxLength={20}
          />
        </div>

        <div className={fieldGroup}>
          <label className={fieldLabel}>전화번호</label>
          <input
            className={fieldInput}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
          />
        </div>

        <div className={fieldGroup}>
          <label className={fieldLabel}>성별</label>
          <div className={genderRow}>
            {(["male", "female", "other"] as const).map((g) => (
              <button
                key={g}
                type="button"
                className={gender === g ? genderButtonActive : genderButton}
                onClick={() => setGender(g)}
              >
                {g === "male" ? "남성" : g === "female" ? "여성" : "기타"}
              </button>
            ))}
          </div>
        </div>

        <div className={fieldGroup}>
          <label className={fieldLabel}>생년월일</label>
          <input
            className={fieldInput}
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <button type="submit" className={submitButton}>
          저장하기
        </button>
      </form>
    </div>
  );
}
