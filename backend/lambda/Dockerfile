FROM public.ecr.aws/lambda/python:3.8

COPY ./requirements.txt ./
COPY lambda/app.py ./
COPY ./digit_reduced_2d.npy ./
COPY ./digit_reduced_3d.npy ./
COPY ./financial_reduced_2d.npy ./
COPY ./financial_reduced_3d.npy ./
COPY ./financial_cluster.npy ./
RUN pip install -r requirements.txt
CMD ["app.handler"]
