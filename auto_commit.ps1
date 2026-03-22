while ($true) {
    git add .
    $status = git status --porcelain
    if ($status) {
        $date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git commit -m "Auto-commit: $date"
        git push
    }
    Start-Sleep -Seconds 60
}
