"use client";

import { useState } from "react";
import {
  settingsPage,
  settingsSection,
  sectionTitle,
  fieldGroup,
  fieldLabel,
  fieldInput,
  saveButton,
  dangerSection,
  dangerTitle,
  dangerDescription,
  dangerButton,
  modalOverlay,
  modal,
  modalTitle,
  modalDescription,
  modalActions,
  modalCancel,
  modalConfirm,
} from "./page.css";

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다");
      return;
    }
    if (newPassword.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다");
      return;
    }
    // TODO: API 연동
    alert("비밀번호가 변경되었습니다");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDeleteAccount = () => {
    // TODO: API 연동
    alert("회원 탈퇴가 완료되었습니다");
    setShowModal(false);
  };

  return (
    <div className={settingsPage}>
      <form className={settingsSection} onSubmit={handleChangePassword}>
        <h2 className={sectionTitle}>비밀번호 변경</h2>

        <div className={fieldGroup}>
          <label className={fieldLabel}>현재 비밀번호</label>
          <input
            className={fieldInput}
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="현재 비밀번호를 입력해주세요"
            required
          />
        </div>

        <div className={fieldGroup}>
          <label className={fieldLabel}>새 비밀번호</label>
          <input
            className={fieldInput}
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="새 비밀번호 (8자 이상, 대소문자+숫자)"
            required
            minLength={8}
          />
        </div>

        <div className={fieldGroup}>
          <label className={fieldLabel}>새 비밀번호 확인</label>
          <input
            className={fieldInput}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="새 비밀번호를 다시 입력해주세요"
            required
          />
        </div>

        <button type="submit" className={saveButton}>
          비밀번호 변경
        </button>
      </form>

      <div className={dangerSection}>
        <h2 className={dangerTitle}>회원 탈퇴</h2>
        <p className={dangerDescription}>
          회원 탈퇴 시 모든 데이터(주문 내역, 리뷰, 쿠폰, 포인트 등)가
          영구적으로 삭제되며 복구할 수 없습니다.
        </p>
        <button
          type="button"
          className={dangerButton}
          onClick={() => setShowModal(true)}
        >
          회원 탈퇴하기
        </button>
      </div>

      {showModal && (
        <div
          className={modalOverlay}
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="회원 탈퇴 확인"
        >
          <div className={modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={modalTitle}>정말 탈퇴하시겠습니까?</h3>
            <p className={modalDescription}>
              탈퇴 후에는 계정을 복구할 수 없습니다.
              <br />
              모든 데이터가 영구 삭제됩니다.
            </p>
            <div className={modalActions}>
              <button
                className={modalCancel}
                onClick={() => setShowModal(false)}
              >
                취소
              </button>
              <button className={modalConfirm} onClick={handleDeleteAccount}>
                탈퇴하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
