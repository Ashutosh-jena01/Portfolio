type StatusIndicatorProps = { status: 'neutral' | 'success' | 'warning' | 'error' | 'checking' | 'connected' | 'failed'; label?: string }

const labels = { neutral: 'Neutral', success: 'Success', warning: 'Warning', error: 'Error', checking: 'Checking', connected: 'Connected', failed: 'Failed' }
const colors = { neutral: 'bg-titanium', success: 'bg-success', warning: 'bg-warning', error: 'bg-error', checking: 'bg-warning', connected: 'bg-success', failed: 'bg-error' }

export function StatusIndicator({ status, label = labels[status] }: StatusIndicatorProps) {
  return <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary-text"><span aria-hidden="true" className={`h-2 w-2 rounded-full ${colors[status]}`} />{label}</span>
}
