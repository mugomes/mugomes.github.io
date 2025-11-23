#!/usr/bin/env sh

cp dist/index.html dist/catalogo.html
cp dist/index.html dist/servicos.html
cp dist/index.html dist/projetos.html
cp dist/index.html dist/apoie.html

replace_title() {
    FILE="$1"
    TITLE="$2"

    if [ -f "$FILE" ]; then
        echo "Atualizando: $FILE → $TITLE"

        sed -i "s@<title>[^<]*</title>@<title>$TITLE</title>@" "$FILE"
    else
        echo "Arquivo não encontrado: $FILE"
    fi
}

replace_title dist/apoie.html "Apoie | Murilo Gomes"
replace_title dist/catalogo.html "Catálogo | Murilo Gomes"
replace_title dist/projetos.html "Projetos | Murilo Gomes"
replace_title dist/servicos.html "Serviços | Murilo Gomes"

echo "www.mugomes.com.br" > dist/CNAME
