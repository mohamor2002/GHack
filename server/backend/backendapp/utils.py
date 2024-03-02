from django.shortcuts import render
from django.http import HttpResponse
from lastmileai import LastMile
import json


# Create your views here.

def generatePodcast (req,topic):
    lastmile = LastMile(api_key="eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..3NFOUBBNDLmbUkn7.tO8630qaeJ1z3T70zAiluX4c76mzFCHbVTrYcF9iH7GizUaIvGeaRw6rUF6U_PjL6NVu1v21a4osyBve_8z5lc7bMJvjvZZphgiL-LrT0KYTkxzjehhDjW6xr8f5XDZ67UUJrw7TOkCk3tRbtDvcuzkh-60NtaEbK7k-pzejz6NtmqZb9dbIFJbaQk_7YGlqpLvAJOpKw8u17gcX8nPWRmPH2u9yH1SKSIRf0QtnLcwRtYfqbEg5dHINcog.4WN7ghFKT5y4TXHbQERynw")
    completion = lastmile.create_openai_chat_completion(
             completion_params = {
                "model": "gpt-4-1106-preview",
                "messages": [
                    {"role":"system", "content":'''User you are both a podcast host and a guest investment expert, you talk as both of them, don't mention their names, write host: before the host starts talking, and guest: before the guest starts, return the result as a json format as following : {"title":"blabla",
"description":"blabla",
"content":{
"host":"blabla",
"guest":"blabla",
"host":"blabla",
...
}
}, take in account that the audience are algerian people and algerian regulations you don't have to mention it explicitly, and generate a 15 minutes podcast about the following topics '''},
                    { "role": "user", "content": topic }
                    ,]
                ,}
            )
    x = completion['completionResponse']['choices'][0]['message']['content']
    x = x.replace("```json","")
    x = x.replace("```","")
    t=json.loads(x)
    print(x)
    return (t)
def generateArticle (req):
    lastmile = LastMile(api_key="eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..3NFOUBBNDLmbUkn7.tO8630qaeJ1z3T70zAiluX4c76mzFCHbVTrYcF9iH7GizUaIvGeaRw6rUF6U_PjL6NVu1v21a4osyBve_8z5lc7bMJvjvZZphgiL-LrT0KYTkxzjehhDjW6xr8f5XDZ67UUJrw7TOkCk3tRbtDvcuzkh-60NtaEbK7k-pzejz6NtmqZb9dbIFJbaQk_7YGlqpLvAJOpKw8u17gcX8nPWRmPH2u9yH1SKSIRf0QtnLcwRtYfqbEg5dHINcog.4WN7ghFKT5y4TXHbQERynw")
    completion = lastmile.create_openai_chat_completion(
             completion_params = {
                "model": "gpt-4-1106-preview",
                "messages": [
                    {"role":"system", "content":'''you are an investment expert and a writer, take in consideration algerian finance regulations and don't mention that explicitly, then write an objective scientific article about the following topic, return a json type result containing the title as title key, the article as body key and a keywords array as keywords key, keep only top 5 investment related keywords from one word'''},
                    { "role": "user", "content": "restaurants investment" }
                    ,]
                ,}
            )
    x = completion['completionResponse']['choices'][0]['message']['content']
    x = x.replace("```json","")
    x = x.replace("```","")

    return HttpResponse(x)