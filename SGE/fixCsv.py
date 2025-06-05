import pandas as pd  # type: ignore

# Leer el CSV original
df = pd.read_csv("temporadas.csv")

# 1. Limpiar espacios en blanco en todo el DataFrame
df = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)

# 2. Convertir columnas numéricas y de fecha
df["numero de episodios"] = pd.to_numeric(df["numero de episodios"], errors='coerce')
df["numero de temporada"] = pd.to_numeric(df["numero de temporada"], errors='coerce')
df["rating"] = pd.to_numeric(df["rating"], errors='coerce')
df["fecha de lanzamiento"] = pd.to_datetime(df["fecha de lanzamiento"], errors='coerce')

# 3. Rellenar valores faltantes
df["numero de episodios"].fillna(df["numero de episodios"].mean().round(1), inplace=True)
df["numero de temporada"].fillna(0, inplace=True)
df["rating"].fillna(df["rating"].mean().round(1), inplace=True)
df["fecha de lanzamiento"].fillna(method='ffill', inplace=True)

# 4. Arreglar nombres inconsistentes (opcional - ejemplo básico)
df["nombre"] = df["nombre"].str.replace("Tres", "3", regex=False)
df["nombre"] = df["nombre"].str.replace("Temp", "temporada", regex=False)

# 5. Crear nuevas columnas
df["anio_lanzamiento"] = df["fecha de lanzamiento"].dt.year
df["es_primera_temporada"] = df["numero de temporada"] == 1

# 6. Mapear IDs a nombres de serie
id_to_nombre = {
    "/series/V8DQsqKqEqNluz2ny13P": "Breaking Bad",
    "/series/ly8qZ1At7X8gSLlDzX6j": "Dexter",
    "/series/a8SwUFHk1VJuRXkeMV7L": "The Walking Dead",
    "/series/Rc5yC4SXTgzbjn0zaZA7": "Prision Break"
}

df["nombre_serie"] = df["idSerie"].map(id_to_nombre)

# 7. Agrupación: cantidad de temporadas por serie (usando nombres)
resumen_series = df.groupby("nombre_serie").agg({
    "numero de temporada": "count",
    "rating": "mean"
}).reset_index()

resumen_series.rename(columns={
    "numero de temporada": "cantidad_temporadas",
    "rating": "rating_promedio"
}, inplace=True)

# Redondear rating promedio a 1 decimal
resumen_series["rating_promedio"] = resumen_series["rating_promedio"].round(1)

# 8. Guardar los archivos procesados
df.to_csv("temporadas_limpio.csv", index=False)
resumen_series.to_csv("resumen_series.csv", index=False)

# 9. Imprimir resultados
print("\n✅ Datos de temporadas limpios:")
print(df)

print("\n📊 Resumen por serie:")
print(resumen_series)
