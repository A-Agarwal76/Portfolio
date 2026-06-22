$repos = Invoke-RestMethod -Uri 'https://api.github.com/users/A-Agarwal76/repos?sort=updated&per_page=30'
foreach($r in $repos) {
    Write-Output ("{0} || {1} || {2} || {3}" -f $r.name, $r.language, $r.html_url, $r.description)
}
