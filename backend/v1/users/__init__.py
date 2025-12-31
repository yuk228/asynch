from fastapi import APIRouter

from . import me

router = APIRouter()

router.include_router(me.router, prefix="/me")