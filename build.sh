#!/bin/sh

alterar_title() {
    ARQUIVO="$1"
    NOVO_TITULO="$2"

    if [ -z "$ARQUIVO" ] || [ -z "$NOVO_TITULO" ] || [ ! -f "$ARQUIVO" ]; then
        echo "Uso: alterar_title arquivo.html \"Novo Título\""
        return 1
    fi

    TITULO_ESCAPADO=$(printf '%s\n' "$NOVO_TITULO" | sed 's/[\/&|]/\\&/g')
    sed -i "s/<title>[^<]*<\/title>/<title>$TITULO_ESCAPADO<\/title>/I" "$ARQUIVO"

    echo "Título atualizado com sucesso em $ARQUIVO"
}

cp dist/index.html dist/projetos.html
alterar_title dist/projetos.html "Projetos | Murilo Gomes"

cp dist/index.html dist/apoie.html
alterar_title dist/apoie.html "Apoie | Murilo Gomes"

exit 0