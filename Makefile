PACKAGE_NAME = md2pdf
NODE = NODE_OPTIONS=--openssl-legacy-provider yarn

# Comandos principais
all: test build

# Comandos auxiliares
help:
	@echo "Comandos disponíveis no Makefile:"
	@echo ""
	@echo "  make start       - Inicia o servidor de desenvolvimento"
	@echo "  make build       - Gera a build de produção"
	@echo "  make test        - Executa os testes"
	@echo "  make analyze     - Analisa o tamanho dos pacotes na build"
	@echo "  make eject       - Ejetar as configurações do create-react-app"
	@echo "  make install     - Instala as dependências do projeto"
	@echo "  make clean       - Remove a pasta node_modules"
	@echo "  make help        - Mostra esta mensagem de ajuda"

start:
	$(NODE) start

build:
	$(NODE) run build

test:
	$(NODE) test --watchAll=false

analyze:
	$(NODE) run analyze 

eject:
	$(NODE) run eject

install:
	$(NODE) install --frozen-lockfile

clean:
	rm -rf node_modules

.PHONY: all help start build test analyze eject install clean
