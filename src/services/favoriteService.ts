
const favoriteApiUrl = `api/favoritesApi`;

export const toggleFavoriteService = async (id: number) => {
  
  
  try {
    const resp = await fetch(favoriteApiUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id}),
      method: 'POST'
    })

    const json = await resp.json();
    
    if(resp.status == 400) throw Error(json)

    return json

  } catch (err) {
    console.error(err);
  }
}