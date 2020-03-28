## Task 1. Caesar cipher CLI tool

To run the program from the repo's root directory use this (for example with bash on Windows):

```bash
Aleksey@Lenovo-B590 MINGW64 ~/Projects/RSS/nodejs-course (master)
$ node task1/caesar-cipher-cli.js <options>
```

CLI tool accepts following options:

```bash
$ node task1/caesar-cipher-cli.js --help
Usage: caesar-cipher-cli.js [options]

Options:
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
  -a, --action  an action encode/decode                      [string] [required]
  -s, --shift   a shift                                      [number] [required]
  -i, --input   an input file                                           [string]
  -o, --output  an output file                                          [string]
```

If input and/or output files are omitted stdin/stdout are used.
To leave type mode from stdin just hit **Ctrl+C**.
