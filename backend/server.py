import os
import warnings

from fastapi import FastAPI, Query
from starlette.middleware.cors import CORSMiddleware
from sklearn.datasets import load_digits
from sklearn.manifold import TSNE
from sklearn.cluster import KMeans
from sklearn.preprocessing import MinMaxScaler
import pandas as pd
import numpy as np
import urllib.request


warnings.filterwarnings("ignore")

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

DIGIT_2D_DATA_FILEPATH = './digit_reduced_2d.npy'
DIGIT_3D_DATA_FILEPATH = './digit_reduced_3d.npy'


if os.path.exists(DIGIT_3D_DATA_FILEPATH):
    digit_reduced3 = np.load(DIGIT_3D_DATA_FILEPATH)
else:
    digit_reduced3 = TSNE(n_components=3).fit_transform(data)
    digit_reduced3 /= digit_reduced3.flatten().max()
    np.save(DIGIT_3D_DATA_FILEPATH, digit_reduced3)

if os.path.exists(DIGIT_2D_DATA_FILEPATH):
    digit_reduced2 = np.load(DIGIT_2D_DATA_FILEPATH)
else:
    digit_reduced2 = TSNE(n_components=2).fit_transform(data)
    digit_reduced2 /= digit_reduced2.flatten().max()
    np.save(DIGIT_2D_DATA_FILEPATH, digit_reduced2)


FINANCIAL_2D_DATA_FILEPATH = './financial_reduced_2d.npy'
FINANCIAL_3D_DATA_FILEPATH = './financial_reduced_3d.npy'
FINANCIAL_CLUSTER_FILEPATH = './financial_cluster.npy'
FINANCIAL_DATA_URL = 'https://drive.google.com/uc?id=1yBMKYKOt-hN6gq1gIQCXEPfFPdwGwAVz'
df_financial_data = pd.read_csv(FINANCIAL_DATA_URL)
df_financial_data['会計期間終了日'] = pd.to_datetime(df_financial_data['会計期間終了日'])
df_financial_data['提出日'] = pd.to_datetime(df_financial_data['提出日'])
target_cols = [
    '従業員数', '平均臨時雇用人員', '発行済株式（自己株式を除く。）の総数に対する所有株式数の割合', '連結子会社の数', '１株当たり純資産',
    '自己資本比率', '現金及び現金同等物の残高', '資産', '流動資産', '固定資産', '有形固定資産', '無形固定資産',
    '投資その他の資産', '負債', '流動負債', '短期借入金', '1年内償還予定の社債', '1年内返済予定の長期借入金',
    '固定負債', '社債', '転換社債型新株予約権付社債', 'コマーシャル・ペーパー', '長期借入金', '純資産', '株主資本',
    '資本金', '資本剰余金', '利益剰余金', '自己株式', '評価・換算差額等', '売上高', '売上原価', '売上総利益',
    '販売費及び一般管理費', '給料及び手当', '減価償却費、販売費及び一般管理費', '研究開発費', '営業利益', '営業外収益',
    '営業外費用', '支払利息', '経常利益', '特別利益', '特別損失', '税引前純利益', '法人税等', '純利益',
    '親会社株主に帰属する純利益', '包括利益', '１株当たり純利益', '調整1株当たり純利益', '株価収益率',
    '自己資本利益率', '営業活動によるキャッシュ・フロー', '減価償却費、営業活動によるキャッシュ・フロー',
    '投資活動によるキャッシュ・フロー', '財務活動によるキャッシュ・フロー', '現金及び現金同等物の増減', '前期資産', '前期売上高',
    '前期純利益', '平均年齢', '平均勤続年数', '平均年間給与', '粗利益', '売上高総利益率', '売上高営業利益率',
    '売上高経常利益率', '売上高販管費率', '総資本回転率', '流動比率', '売上高変化率', '純利益変化率', '期首期末平均資産',
    '総資産経常利益率', '総資産純利益率', '総資産親会社株主に帰属する純利益率', '自己資本', '有利子負債'
]
latest_subdates_mask = (df_financial_data.groupby(['証券コード'])['会計期間終了日'].transform('max') == df_financial_data['会計期間終了日'])
df_financial_latest = df_financial_data[latest_subdates_mask]
df_financial_latest.set_index('証券コード', inplace=True)
df_financial_latest.fillna(df_financial_latest.median(), inplace=True)
if os.path.exists(FINANCIAL_3D_DATA_FILEPATH):
    financial_reduced3 = np.load(FINANCIAL_3D_DATA_FILEPATH)
else:
    financial_reduced3 = TSNE(n_components=3).fit_transform(MinMaxScaler().fit_transform(df_financial_latest[target_cols]))
    financial_reduced3 /= financial_reduced3.flatten().max()
    np.save(FINANCIAL_3D_DATA_FILEPATH, financial_reduced3)
if os.path.exists(FINANCIAL_2D_DATA_FILEPATH):
    financial_reduced2 = np.load(FINANCIAL_2D_DATA_FILEPATH)
else:
    financial_reduced2 = TSNE(n_components=2).fit_transform(MinMaxScaler().fit_transform(df_financial_latest[target_cols]))
    financial_reduced2 /= financial_reduced2.flatten().max()
    np.save(FINANCIAL_2D_DATA_FILEPATH, financial_reduced3)
if os.path.exists(FINANCIAL_CLUSTER_FILEPATH):
    financial_classes = np.load(FINANCIAL_CLUSTER_FILEPATH)
else:
    km = KMeans(n_clusters=20).fit(MinMaxScaler().fit_transform(df_financial_latest[target_cols]))
    financial_classes =  km.predict(MinMaxScaler().fit_transform(df_financial_latest[target_cols]))
    np.save(FINANCIAL_CLUSTER_FILEPATH, financial_classes)


@app.get('/healthcheck')
async def healthcheck():
    print('ok')
    return 'ok'


@app.get('/api/digit_distdata/{dim}')
async def digit_3d_distdata(
    dim: int = Query(3, gt=2, le=3)
):
    if dim == 3:
        reduced = digit_reduced3
    elif dim == 2:
        reduced = digit_reduced2

    return {'data': reduced.tolist(), 'label': label.tolist()}


@app.get('/api/financial_distdata/{dim}')
async def financial_distdata(
    dim: int = Query(3, gt=2, le=3)
):
    if dim == 3:
        reduced = financial_reduced3
    elif dim == 2:
        reduced = financial_reduced2

    return {
        'data': reduced.tolist(),
        'company_name': df_financial_latest['会社名'].tolist(),
        'sector': df_financial_latest['業種'].tolist(),
        'class': financial_classes.tolist(),
    }


@app.post('/api/save_image')
async def save_image(
    image_url: str,
    filepath: str,
):
    print(image_url)
    IMAGE_DIR = './image_data'
    filepath = os.path.join(IMAGE_DIR, filepath)
    savedir = os.path.dirname(filepath)
    os.makedirs(savedir, exist_ok=True)
    response = urllib.request.urlopen(image_url)
    with open(filepath, 'wb') as f:
        f.write(response.file.read())
