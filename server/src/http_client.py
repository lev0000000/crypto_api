from aiohttp import ClientSession
from async_lru import alru_cache

class HTTPclient:
    def __init__(self, base_url: str, api_key: str):
        self._session = ClientSession(
            base_url=base_url,
            headers={'X-CMC_PRO_API_KEY': api_key}
        )


class CMCHTTPClient(HTTPclient):
    @alru_cache
    async def get_coin_list(self):
        async with self._session.get('/v1/cryptocurrency/listings/latest') as response:
            return await response.json()
    @alru_cache
    async def get_currency(self, currency: str):
        async with self._session.get(f'v3/cryptocurrency/quotes/latest', params={'id': currency}) as response:
            result = await response.json()
            return result['data']