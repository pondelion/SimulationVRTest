from fastapi import FastAPI, Query
from starlette.middleware.cors import CORSMiddleware
from sklearn.datasets import load_digits
from sklearn.manifold import TSNE


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

digits = load_digits()
data = digits.data
label = digits.target

reduced3 = TSNE(n_components=3).fit_transform(data)
reduced3 /= reduced3.flatten().max()
reduced2 = TSNE(n_components=2).fit_transform(data)
reduced2 /= reduced2.flatten().max()

@app.get('/digit_distdata/{dim}')
async def digit_3d_distdata(
    dim: int = Query(3, gt=2, le=3)
):
    if dim == 3:
        reduced = reduced3
    elif dim == 2:
        reduced = reduced2

    return {'data': reduced.tolist(), 'label': label.tolist()}
