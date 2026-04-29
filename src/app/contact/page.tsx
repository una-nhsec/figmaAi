"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertInquiry } from "@/lib/api/inquiries";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = name.trim().length > 0 && message.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      await insertInquiry({ name, message });
      alert(`문의가 성공적으로 접수되었습니다.\n소중한 의견 감사드립니다!`);
      setName("");
      setMessage("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-default py-16 px-6">
      <div className="mx-auto max-w-md space-y-8">
        
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-text-default tracking-tight">고객 문의</h1>
          <p className="text-text-secondary">궁금한 점을 남겨주시면 빠르게 답변해 드립니다.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-200 border border-border-default p-6 shadow-sm">
          
          {error && (
            <div className="rounded-200 bg-danger-default/10 border border-danger-default p-3 text-sm text-text-danger">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-text-default">
              이름 (한글)
            </label>
            <Input
              id="name"
              placeholder="홍길동"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-text-default">
              문의 내용
            </label>
            <Textarea
              id="message"
              placeholder="문의하실 내용을 자세히 적어주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "제출 중..." : "문의 제출하기"}
          </Button>
          
        </form>

      </div>
    </div>
  );
}
