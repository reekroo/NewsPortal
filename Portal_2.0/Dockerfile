#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Portal_2.0/Portal_2.0.csproj", "Portal_2.0/"]
RUN dotnet restore "Portal_2.0/Portal_2.0.csproj"
COPY . .
WORKDIR "/src/Portal_2.0"
RUN dotnet build "Portal_2.0.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Portal_2.0.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Portal_2.0.dll"]