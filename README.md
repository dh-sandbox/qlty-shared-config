# qlty-shared-config

This repository demonstrates Qlty's shared analysis configuration feature.

It is a reusable source repository that other projects can inherit from at analysis time. Instead of duplicating the same linting and analysis settings across many repositories, you can define them once here and have consumer repositories pull them in when Qlty runs.

## Purpose

This repo is intended to show how teams can:

- centralize static analysis configuration
- share linter configuration files across repositories
- keep project-level Qlty configuration small and maintainable
- enforce more consistent standards across multiple codebases

## Demo Repositories

This demo is made up of two repositories:

- [qlty-shared-config](https://github.com/dh-sandbox/qlty-shared-config) - the shared source repository
- [qlty-shared-config-consumer](https://github.com/dh-sandbox/qlty-shared-config-consumer) - a consumer repository that inherits configuration from this repo

## How It Works

A consumer repository references this repository in its `.qlty/qlty.toml` file as a custom source:

```toml
config_version = "0"

[[source]]
name = "default"
default = true

[[source]]
name = "shared-demo"
repository = "https://github.com/dh-sandbox/qlty-shared-config"
branch = "main"
```

## Learn More
Qlty documentation on shared analysis configuration: [Shared Analysis Configuration](https://docs.qlty.sh/qlty-cli/additional-information/shared-analysis-configuration)

## Demo Notes
This repository is a sandbox project created to demonstrate how Qlty shared analysis configuration works in practice. It is designed to be used together with the consumer repository linked above.
