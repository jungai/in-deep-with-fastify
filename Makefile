.PHONY: prune-node install-all build-all

install-all:
	pnpm i -r

prune-node:
	pnpm -r exec -- rm -rf node_modules
