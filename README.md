# PRAKTIK GIT
## inisialisasi git (init)
```sh
$ git init
```
## perubahan sementara (staging)
menyimpan perubahan sementara dari working directory ke dalam staging 
```sh
$ git add <...dir_file>
$ git add <...dir_folder>
```
## perubahan permanen (commit)
menyimpan seluruh staging menjadi permanen,pesan commit berdasarkan [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/), untuk type commit bisa mengacu ke [angular convention](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)
```sh
$ git commit 
$ git commit -m "<pesan>"
```
## pengecekan status working directory
bisa digunakan untuk melihat status baik yang sudah di staging area ataupun belum
```sh
$ git status
```
bisa digunakan untuk melihat riwayat atau history commit
```sh
$ git log
```
## managemen git remote
```sh
$ git remote <command> <argument>
```
diginakan untuk menghubungkan antara git yang di komputer lokal dengan git yang ada di penyedial layanan git
```sh 
$ git remote add <alias_remote> <link_alamat_repo>
```
Digunakan untuk melihat list remote
```sh
$ git remote [-v]
```
Digunakan untuk melihat isi dari alias remote
```sh
$ git remote get-url <alias_remote>
```

## synchronization 
digunakan untuk sinktronisasi dari lokal ke remote
```sh
$ git push [-u] <tujuan_remote> <branch_local>
```
untuk sinkronisasi dari remote ke lokal 
```sh
$ git pull <target_remote> <branch_remote>
```

## copy remote repository to local computer
Digunakan untuk meng-kloning remote repo
```sh
$ git clone <link_remote> [<cunstom_name>]
```