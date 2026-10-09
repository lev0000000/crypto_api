from fastapi import APIRouter
from src.init import cmc_client
from src.http_client import CMCHTTPClient

router = APIRouter(
    prefix="/cryptocurrencies",
)

@router.get('')
async def get_cryptocurrencies():
    return await cmc_client.get_coin_list()

@router.get('/{id}')
async def get_cryptocurrency(id: int):
    return await cmc_client.get_currency(id)