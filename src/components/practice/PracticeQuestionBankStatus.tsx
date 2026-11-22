import { AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PracticeQuestionBankStatusProps {
  loading: boolean;
  error: string | null;
  warning: string | null;
  questionCount: number;
  onRetry: () => void;
}

export function PracticeQuestionBankStatus({
  loading,
  error,
  warning,
  questionCount,
  onRetry,
}: PracticeQuestionBankStatusProps) {
  if (!loading && !error && questionCount > 0) {
    if (!warning) return null;
    return (
      <div role="status" className="mb-4 flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-left">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <div className="space-y-1 text-sm">
          <p className="font-medium">Using built-in sample questions.</p>
          <p className="text-muted-foreground">{warning}</p>
          <p className="text-muted-foreground">
            Apply the Supabase migrations and run <code>npm run seed:practice-questions</code> to load the full bank.
          </p>
        </div>
        <Button onClick={onRetry} variant="outline" size="sm">Retry</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-64 max-w-xl flex-col items-center justify-center gap-4 p-8 text-center">
      {loading ? (
        <>
          <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden="true" />
          <p role="status" className="text-muted-foreground">Loading practice questions...</p>
        </>
      ) : error ? (
        <>
          <AlertCircle className="h-8 w-8 text-destructive" aria-hidden="true" />
          <div role="alert" className="space-y-2">
            <p className="font-medium">Could not load the practice question bank.</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
          <Button onClick={onRetry} variant="outline">Try again</Button>
        </>
      ) : (
        <>
          <AlertCircle className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
          <div className="space-y-2">
            <p className="font-medium">No questions are available for this test type yet.</p>
            <p className="text-sm text-muted-foreground">
              Apply the Supabase migrations and seed the practice bank with{" "}
              <code>npm run seed:practice-questions</code>.
            </p>
          </div>
          <Button onClick={onRetry} variant="outline">Check again</Button>
        </>
      )}
    </div>
  );
}
